import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './post'
import { guideType } from './guide'
import { homeType } from './home'
import { contactType } from './contact'
import { testimonialType } from './testimonial'
import { sejourType } from './sejour'
import { sejourDateType } from './sejourDate'
import { aLaCarteType } from './aLaCarte'
import { settingsType } from './settings'
import { faqType } from './faq'
import { tagType } from './tag'

// Anciens schémas archivés (à supprimer plus tard)
// import { activityType } from './activity'
// import { universType } from './univers'
// import { sortieType } from './sortie'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    settingsType,
    postType,
    tagType,
    guideType,
    homeType,
    contactType,
    testimonialType,
    sejourType,
    sejourDateType,
    aLaCarteType,
    faqType,
  ],
}
