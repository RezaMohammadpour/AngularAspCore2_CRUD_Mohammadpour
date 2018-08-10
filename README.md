I'm Dr.Reza Mohammadpour, Professional Software Architect and Senior Developer.

In this project I answerd all necesseries in Angular in Asp.net Core 2.1 and resolved all issues.

#To Run this project:

1-Open Start.cs file and put your sqlserver connection string in below code
    services.AddDbContext<DBMohammadpourAngular>(
                options => options.UseSqlServer("Your SqlServer Connection String"));
                
2-Open from menu , Tools > Nuget Package Manager > NuGet Package Manager Console 

3-Run command:  Update-Database

4-Your database named 'DBMohammadpourAngular' has been created in Sqlserver.

5-Run Application and Enjoy it.
