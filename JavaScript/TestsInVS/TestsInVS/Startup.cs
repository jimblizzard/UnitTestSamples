using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestsInVS.Startup))]
namespace TestsInVS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
