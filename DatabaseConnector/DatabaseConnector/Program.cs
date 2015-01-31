using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace DatabaseConnector
{
    class Program
    {
        static void Main(string[] args)
        {
            Initalize();
            Console.ReadLine();
        }

        static void Initalize() 
        {
            var db = new DBConnector();
            db.OpenConnection();
            db.InsertRandomData();
        }
    }
}
