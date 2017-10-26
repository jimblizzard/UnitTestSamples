using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
namespace Employees
{ 
    public class EmployeeManager
    { 
        // an example of passing an interface to a method
        public int GetEmployeeIdByName(string eName, IEmployeeManagerHelper empMgrHelper = null)
        {
            // if the helper is null, we need to create one
            if (empMgrHelper == null)
            {
                 empMgrHelper= new EmployeeManagerHelper();
            }

            var empId = empMgrHelper.GetAnEmp(eName);

            return empId;
        }
    }

    public interface IEmployeeManagerHelper
    {
        int GetAnEmp(string n);
    } 

    // notice that this implementation isn't quite ready. . .
    public class EmployeeManagerHelper : IEmployeeManagerHelper
    {
        public int GetAnEmp(string name)
        {
            throw new Exception("This is not ready yet"); 
        }
    }
}
