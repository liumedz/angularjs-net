using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularSpa.Controllers
{
    public class PersonsController : Controller
    {
        //
        // GET: /Persons/
        public ActionResult Index()
        {
            return View();
        }
	}
}