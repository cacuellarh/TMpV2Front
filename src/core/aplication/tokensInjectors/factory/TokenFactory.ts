import { InjectionToken } from "@angular/core";
import { IFactoryForm } from "../../contracts/factory/IFormFactory";

export const FORM_FACTORY = new InjectionToken<IFactoryForm>('FORM_FACTORY');