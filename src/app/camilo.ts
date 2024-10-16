export class Vida
{
    _lenguajesDeProgramacion : any[] = ["python","typescript","c#","php"]

    SaberMiPasion(edad : number) : void
    {
        if(edad > 19)
        {
            this.EstudiarProgramacion(this._lenguajesDeProgramacion);
        }
    }


    EstudiarProgramacion(lenguajes : any[]) : void
    {

    }
}