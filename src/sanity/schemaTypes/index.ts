import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './post'
import { guideType } from './guide'
import { homeType } from './home'
import { contactType } from './contact'
import { testimonialType } from './testimonial'
import { sejourType } from './sejour'
import { sejourDateType } from './sejourDate'
import { aLaCarteType } from './aLaCarte'
import { niveauSki } from './niveauSki'
import { massifType } from './massif'
import { settingsType } from './settings'
import { faqType } from './faq'
import { tagType } from './tag'
import { activitiesType } from './activities'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    settingsType,
    postType,
    tagType,
    massifType,
    guideType,
    homeType,
    contactType,
    testimonialType,
    sejourType,
    sejourDateType,
    aLaCarteType,
    niveauSki,
    faqType,
    activitiesType,
  ],
}
