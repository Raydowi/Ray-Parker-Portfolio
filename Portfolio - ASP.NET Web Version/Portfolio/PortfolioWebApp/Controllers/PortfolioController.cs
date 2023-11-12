using Microsoft.AspNetCore.Mvc;

namespace PortfolioWebApp.Controllers
{
    public class PortfolioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //Game Dev Portfolio Pages

        public IActionResult WhiskerWitchery()
        {
            return View();
        }
        public IActionResult SeniorHearts()
        {
            return View();
        }

        public IActionResult LeafItBehind()
        {
            return View();
        }
        public IActionResult HiveQuest()
        {
            return View();
        }

        //Software Dev Pages
        public IActionResult HTTPProxy()
        {
            return View();
        }

        public IActionResult RayTracing()
        {
            return View();
        }

    }
}
