class Company { 
    companyName!:string 
    ceo!:string 
  
    setSeo(seoName: string) { 
       this.ceo = seoName; 
    } 
 } 
  
 class Human { 
    protected fullName:string 
    protected role:string 
  
    constructor(fullname: string,role:string) { 
       this.fullName = fullname; 
       this.role=role 
    } 
 } 
  
 class Ceo extends Human { 
    protected projectName!:string 
    protected manegerName!:string 
    protected developerName!:string 
  
    constructor(fullName: string,role:string) { 
       super(fullName,role); 
    } 
    setDeveloper(developerName:string,role:string): void { 
       this.developerName = developerName 
       this.role = role 
    } 
    setManager(manegerName:string,role:string): void { 
       this.manegerName = manegerName 
       this.role = role 
    } 
    steProject(projectName:string){ 
       this.projectName = projectName 
    } 
 } 
  
 class Manager extends Human { 
    constructor(fullName: string,role:string) { 
       super(fullName,role); 
    } 
  
    setDeveloper(fullName:string,role:string): void { 
       this.fullName = fullName 
       this.role = role 
    } 
 } 
 class Developer extends Human { 
    constructor(fullName: string,role:string) { 
       super(fullName,role); 
    } 
  
    writeCode(): void { 
       console.log(`Coding,${this.role}`); 
    } 
 } 
  
  
 // const developer = new Developer("Armen","JS") 
 // developer.writeCode()