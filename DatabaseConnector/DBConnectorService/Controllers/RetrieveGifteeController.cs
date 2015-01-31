using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DatabaseConnector;
using DatabaseConnector.Forms;

namespace DBConnectorService.Controllers
{
    public class RetrieveGifteeController : ApiController
    {
        public RetrievedUserForm Post([FromBody]ReceivedRequestForm value)
        {
            DBRequest request = new DBRequest();
            return request.RetrievePersonToGift(value);
        }
    }
}
