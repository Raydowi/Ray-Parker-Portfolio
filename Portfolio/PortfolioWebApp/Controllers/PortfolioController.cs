using Microsoft.AspNetCore.Mvc;

namespace PortfolioWebApp.Controllers
{
    public class PortfolioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
