export class Result<T> {
    public isSuccess: boolean;
    public errorMessage: string;
    public value: T;
    public codeError : number
    private constructor(isSuccess: boolean, errorMessage?: string, value?: T, CodeError? : number) {
      this.isSuccess = isSuccess;
      this.errorMessage = errorMessage || '';
      this.value = value!;
      this.codeError = CodeError || 0
    }
  
    public static Success<T>(value: T): Result<T> {
      return new Result<T>(true, '', value);
    }
  
    public static Failure<T>(errorMessage: string, codeError : number): Result<T> {
      return new Result<T>(false, errorMessage,undefined,codeError);
    }

    public  ShowInfoError()
    {
      console.error(`Se presento un error : ${this.errorMessage}, codigo de error: ${this.codeError}`)
    }
  }