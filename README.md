I'm Dr.Reza Mohammadpour, Professional Software Architect and Senior Developer.

In this project I answerd all necesseries in Angular in Asp.net Core 2.1 and resolved all issues.

#To Run this project:

1-Open Start.cs file and put your sqlserver connection string in below code
    services.AddDbContext<DBMohammadpourAngular>(
                options => options.UseSqlServer("Your SqlServer Connection String"));
                
2-Open from menu , Tools > Nuget Package Manager > NuGet Package Manager Console 

3-Run command:  Update-Database

4-Your database named 'DBMohammadpourAngular' has been created in Sqlserver.

5-Open Solution explorer > Right click > Properties > Debug > Click Copy button after ssl website address

6-Open Folder ClientApp > src > app > DBMohammadpour  and open file tblEmployee.ts

7-Paste your website address in below code ( remove 'https://localhost:44354' and paste your ssl website address. pay attention ,don't remove '/api/' part)
   public ROOT_URL: string = "https://localhost:44354/api/";

6-Run Application and Enjoy it.
