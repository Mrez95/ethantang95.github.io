using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace DatabaseConnector
{

    class DBConnector
    {
        private MySqlConnection connection;
        private string server;
        private string database;
        private string uid;
        private string password;

        public DBConnector()
        {
            Initialize();
        }

        //Initialize values
        private void Initialize()
        {
            server = "localhost";
            database = "hackuoft";
            uid = "root";
            password = "zNm%?5gHL72/UF,^ft3(C<SOHS+";
            string connectionString;
            connectionString = "SERVER=" + server + ";" + "DATABASE=" +
            database + ";" + "UID=" + uid + ";" + "PASSWORD=" + password + ";";

            connection = new MySqlConnection(connectionString);
        }

        //open connection to database
        public bool OpenConnection()
        {
            try
            {
                connection.Open();
                Console.WriteLine("connection successful");
                return true;
            }
            catch (MySqlException ex)
            {
                //When handling errors, you can your application's response based 
                //on the error number.
                //The two most common error numbers when connecting are as follows:
                //0: Cannot connect to server.
                //1045: Invalid user name and/or password.
                switch (ex.Number)
                {
                    case 0:
                        Console.WriteLine("Cannot connect to server.  Contact administrator");
                        break;

                    case 1045:
                        Console.WriteLine("Invalid username/password, please try again");
                        break;
                }
                return false;
            }
        }

        public bool CloseConnection() 
        {
            try
            {
                connection.Close();
                return true;
            }
            catch 
            {
                Console.WriteLine("WTF? connection close failed?");
                return false;
            }
        }

        public int ExecuteNonQuery(MySqlCommand query)
        {
            query.Connection = connection;
            return query.ExecuteNonQuery();
        }

        public MySqlDataReader ExecuteQuery(MySqlCommand query) 
        {
            query.Connection = connection;
            return query.ExecuteReader();
        }

        public object ExecuteScalar(MySqlCommand query) 
        {
            query.Connection = connection;
            return query.ExecuteScalar();
        }

        public void InsertRandomData() 
        {
            for (int i = 0; i < 100; i++) 
            {
                char gender = i%2 == 0 ? 'M' : 'F';
                string command = String.Format("INSERT INTO users (userID, username, password, firstname, lastname, gender, " +
                    "phone, email, address, city, state, country, postal, aboutme, wishlist) VALUES " +
                    "('{0}', 'test{0}', 'password{0}', 'firstname{0}', 'lastname{0}', '{1}', '111-111-1111', " +
                    "'test{0}@test.com', 'test{0} street', 'CityName', 'StateName', 'CountryName', '1A1A1A', " +
                    "'I am a test user number {0}', 'I wish for some stuff')", i, gender);
                Console.WriteLine(command);
                var execute = new MySqlCommand(command, connection);
                execute.ExecuteNonQuery();
            }
        }
    }
}
