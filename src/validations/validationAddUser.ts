import * as Yup from 'yup';
import { EValidation, WITHOUT_WHITE_SPACE_REGEXP } from '../ENUM/Enum';

export interface ISchema {
  name: string;
  surname: string;
  desc: string;
}

export const AddUserSchema: Yup.SchemaOf<ISchema> = Yup.object().shape({
  name: Yup.string()
    .matches(WITHOUT_WHITE_SPACE_REGEXP, 'enter_a_valid_email')
    .min(EValidation.minCharacters, 'Must contain at least two characters')
    .required('First name is required'),
  surname: Yup.string()
    .matches(WITHOUT_WHITE_SPACE_REGEXP, 'cannot_contain_spaces')
    .min(EValidation.minCharacters, 'Must contain at least two characters')
    .required('Last name is required'),
  desc: Yup.string()
    .min(EValidation.minCharactersDesc, 'Must be at least 25 characters long')
    .required('Description is required'),
});
