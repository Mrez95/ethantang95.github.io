using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DatabaseConnector.Forms;
using MySql.Data.MySqlClient;

namespace DatabaseConnector
{
    public class DBRequest
    {
        public string CheckUser(LogInForm login) 
        {
            var db = new DBConnector();
            var queryBuilder = new StringBuilder("SELECT COUNT(*) FROM users WHERE username = @user");
            var command = new MySqlCommand(queryBuilder.ToString());
            command.Parameters.AddWithValue("@user", login.username);
            var result = db.ExecuteScalar(command);
            db.CloseConnection();
            if ((int)result > 0)
                return LogIn(login);
            else
                return "none";
        }
        public string LogIn(LogInForm login) {
            var db = new DBConnector();
            var queryBuilder = new StringBuilder("SELECT password FROM users WHERE username = @user");
            var command = new MySqlCommand(queryBuilder.ToString());
            command.Parameters.AddWithValue("@user", login.username);
            var result = db.ExecuteQuery(command);
            string password = "";
            while (result.Read())
            {
                password = result.GetString(0);
            }
            if (password == "")
                return "fault";
            queryBuilder = new StringBuilder("SELECT registered FROM users WHERE username = @user");
            command = new MySqlCommand(queryBuilder.ToString());
            result = db.ExecuteQuery(command);
            while (result.Read())
            {
                if (!result.GetBoolean(0))
                    return "notRegistered";
            }
            db.CloseConnection();
            if (password == login.password)
                return "success";
            else
                return "failed";

        }
        public RetrievedUserForm RetrievePersonToGift(ReceivedRequestForm secretSanta) 
        {
            var retrieved = new RetrievedUserForm();
            var db = new DBConnector();
            var queryBuilder = new StringBuilder("SELECT * FROM users (")
                .Append("SELECT targetuserID FROM @eventdb WHERE hostuser = @host AS target )")
                .Append("WHERE userID = target;");
            var command = new MySqlCommand(queryBuilder.ToString());
            command.Parameters.AddWithValue("@eventdb", secretSanta.eventName);
            command.Parameters.AddWithValue("@host", secretSanta.username);

            var result = db.ExecuteQuery(command);
            db.CloseConnection();
            while (result.Read())
            {
                retrieved.firstname = result.GetString(result.GetOrdinal("firstname"));
                retrieved.gender = result.GetChar(result.GetOrdinal("gender"));
                retrieved.address = result.GetString(result.GetOrdinal("address"));
                retrieved.city = result.GetString(result.GetOrdinal("city"));
                retrieved.state = result.GetString(result.GetOrdinal("state"));
                retrieved.country = result.GetString(result.GetOrdinal("country"));
                retrieved.postal = result.GetString(result.GetOrdinal("postal"));
                retrieved.aboutMe = result.GetString(result.GetOrdinal("aboutme"));
                retrieved.wishList = result.GetString(result.GetOrdinal("wishlist"));
            }
            return retrieved;
        }
        public string Registeration(NewUserForm newUser) 
        {
            var db = new DBConnector();
            var queryBuilder = new StringBuilder("SELECT COUNT(*) FROM users WHERE username = @user");
            var command = new MySqlCommand(queryBuilder.ToString());
            command.Parameters.AddWithValue("@user", newUser.username);
            int result = (int)db.ExecuteScalar(command);
            if (result > 0)
                return "username taken";

            queryBuilder = new StringBuilder("SELECT COUNT(*) FROM users WHERE phone = @phone");
            command = new MySqlCommand(queryBuilder.ToString());
            command.Parameters.AddWithValue("@phone", newUser.phone);
            result = (int)db.ExecuteScalar(command);
            if (result > 0)
                return "phone taken";
            //now we know the user is actually new, start by creating a registeration serial
            int registerSerial = (new Random().Next(100000, 999999));
            queryBuilder = new StringBuilder("SELECT MAX(userID) FROM users");
            command = new MySqlCommand(queryBuilder.ToString());
            result = (int)db.ExecuteScalar(command);
            
            queryBuilder = new StringBuilder("INSERT INTO users (userID, username, password, firstname, lastname, gender, ")
                    .Append("phone, email, address, city, state, country, postal, aboutme, wishlist, registerSerial) VALUES ('")
                    .Append(result)
                    .Append("', '@username', '@password', '@firstname', '@lastname', '@gender', '@phone', '@email', '@address'")
                    .Append(", '@city', '@state', '@country', '@postal', '@aboutme', '@wishlist', '@registerSerial')");
            command.Parameters.AddWithValue("@username", newUser.username);
            command.Parameters.AddWithValue("@password", newUser.password);
            command.Parameters.AddWithValue("@firstname", newUser.firstName);
            command.Parameters.AddWithValue("@lastename", newUser.lastName);
            command.Parameters.AddWithValue("@gender", newUser.gender);
            command.Parameters.AddWithValue("@phone", newUser.phone);
            command.Parameters.AddWithValue("@email", newUser.email);
            command.Parameters.AddWithValue("@address", newUser.address);
            command.Parameters.AddWithValue("@city", newUser.city);
            command.Parameters.AddWithValue("@state", newUser.state);
            command.Parameters.AddWithValue("@country", newUser.country);
            command.Parameters.AddWithValue("@postal", newUser.postal);
            command.Parameters.AddWithValue("@aboutme", newUser.aboutMe);
            command.Parameters.AddWithValue("@wishlist", newUser.wishList);
            command.Parameters.AddWithValue("@registerSerial", registerSerial.ToString());
            result = db.ExecuteNonQuery(command);
            db.CloseConnection();
            if (result > 0)
                return "success";
            else
                return "failed";
        }
        public string Register(UserRegisterationForm registerSerial) 
        {
            var db = new DBConnector();
            var queryBuilder = new StringBuilder("SELECT registerSerial FROM users WHERE username = @user");
            var command = new MySqlCommand(queryBuilder.ToString());
            command.Parameters.AddWithValue("@user", registerSerial.username);
            var result = db.ExecuteQuery(command);
            string serial = "";
            while (result.Read()) 
            {
                serial = result.GetString(0);
            }
            if (serial == "")
                db.CloseConnection();
                return "fault";
            if (serial == registerSerial.registerSerial)
            {
                queryBuilder = new StringBuilder("UPDATE users SET registered=TRUE WHERE username = @user");
                command = new MySqlCommand(queryBuilder.ToString());
                command.Parameters.AddWithValue("@user", registerSerial.username);
                var update = db.ExecuteNonQuery(command);
                db.CloseConnection();
                if (update > 0)
                    return "success";
                else
                    return "fault";
            }
            else
                db.CloseConnection();
                return "failed";
        }
        public string JoinEvent(JoinEventForm join) 
        {
            var db = new DBConnector();
            var queryBuilder = new StringBuilder("INSERT INTO eventqueue (eventID, eventName, userID, username) VALUE ")
                .Append("((SELECT eventID FROM event WHERE eventname = @eventname), ")
                .Append("'@eventname', (SELECT userID FROM user WHERE username = @user), '@user');");
            var command = new MySqlCommand(queryBuilder.ToString());
            command.Parameters.AddWithValue("@eventname", join.eventName);
            command.Parameters.AddWithValue("@users", join.username);
            var result = db.ExecuteNonQuery(command);
            if (result > 0)
                return "success";
            else
                return "fault";
        }
    }
}
