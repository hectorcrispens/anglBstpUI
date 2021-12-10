/** Border types */
export type brdrType = 'border'|'border-0'|'border-top'|'border-top-0'|'border-end'|'border-end-0'|'border-bottom'|'border-bottom-0'|'border-start'
                |'border-start-0'|'border-primary'|'border-secondary'|'border-success'|'border-info'|'border-warning'|'border-danger'|'border-light'
                |'border-dark'|'border-white'|'border-1'|'border-2'|'border-3'|'border-4'|'border-5'
                
/** Background types */                
export type bgType = 'bg-primary'|'bg-secondary'|'bg-success'|'bg-info'|'bg-warning'|'bg-danger'|'bg-light'|'bg-dark'|'bg-black'|'bg-white'|'bg-body'
                |'bg-transparent '|'bg-opacity-10'|'bg-opacity-25'|'bg-opacity-50'|'bg-opacity-75'|'bg-opacity-100 '|'bg-gradient'

/** Text align types */                
export type textAlgnType = 'text-start'|'text-end'|'text-center'

/** Text color types*/
export type textColrType = 'text-primary'|'text-secondary'|'text-success'|'text-info'|'text-warning'
|'text-danger'|'text-light'|'text-dark'|'text-black'|'text-white'

/** Font sizes types */
export type fontSizeType = 'fs-1'|'fs-2'|'fs-3'|'fs-4'|'fs-5'|'fs-6'

/** Font style types */
export type fontStyltType = 'font-monospace'|'fst-italic'|'fst-normal'

/** Font weight types */
export type fontWghtType = 'fw-light'|'fw-lighter'|'fw-normal'|'fw-bold'|'fw-bolder'

/** width types */
export type wdthType = 'w-25'|'w-50'|'w-75'|'w-100'|'w-auto' | 'vw-100'|'min-vw-100'

/** height types */
export type hghtType = 'h-25'|'h-50'|'h-75'|'h-100'|'h-auto'|'mh-100'|'vh-100'|'min-vh-100'

/** flex directions type */
export type flexDrtnType = 'flex-row'| 'flex-row-reverse'| 'flex-column'| 'flex-column-reverse'| 'flex-sm-row'| 'flex-sm-row-reverse'
                            | 'flex-sm-column'| 'flex-sm-column-reverse'| 'flex-md-row'| 'flex-md-row-reverse'| 'flex-md-column'
                            | 'flex-md-column-reverse'| 'flex-lg-row'| 'flex-lg-row-reverse'| 'flex-lg-column'| 'flex-lg-column-reverse'
                            | 'flex-xl-row'| 'flex-xl-row-reverse'| 'flex-xl-column'| 'flex-xl-column-reverse'| 'flex-xxl-row'
                            | 'flex-xxl-row-reverse'| 'flex-xxl-column'| 'flex-xxl-column-reverse' 

/** justify content type */
export type jstfCntnType = 'justify-content-start' | 'justify-content-xxl-around' | 'justify-content-xxl-evenly'
                            | 'justify-content-end' | 'justify-content-center' | 'justify-content-between' | 'justify-content-around' 
                            | 'justify-content-evenly' | 'justify-content-sm-start' | 'justify-content-sm-end' | 'justify-content-sm-center' 
                            | 'justify-content-sm-between' | 'justify-content-sm-around' | 'justify-content-sm-evenly' | 'justify-content-md-start' 
                            | 'justify-content-md-end' | 'justify-content-md-center' | 'justify-content-md-between' | 'justify-content-md-around' 
                            | 'justify-content-md-evenly' | 'justify-content-lg-start' | 'justify-content-lg-end' | 'justify-content-lg-center' 
                            | 'justify-content-lg-between' | 'justify-content-lg-around' | 'justify-content-lg-evenly' | 'justify-content-xl-start' 
                            | 'justify-content-xl-end' | 'justify-content-xl-center' | 'justify-content-xl-between' | 'justify-content-xl-around' 
                            | 'justify-content-xl-evenly' | 'justify-content-xxl-start' | 'justify-content-xxl-end' | 'justify-content-xxl-center' 
                            | 'justify-content-xxl-between'                             

/** Margin types */
export type mrgnType = 'mw-100'
                        |'m-0'|'m-1'|'m-2'|'m-3'|'m-4'|'m-5'|'m-auto'|'mx-0'|'mx-1'|'mx-2'|'mx-3'|'mx-4'|'mx-5'|'mx-auto'|'my-0'|'my-1'|'my-2'
                        |'my-3'|'my-4'|'my-5'|'my-auto'|'mt-0'|'mt-1'|'mt-2'|'mt-3'|'mt-4'|'mt-5'|'mt-auto'|'me-0'|'me-1'|'me-2'|'me-3'|'me-4'
                        |'me-5'|'me-auto'|'mb-0'|'mb-1'|'mb-2'|'mb-3'|'mb-4'|'mb-5'|'mb-auto'|'ms-0'|'ms-1'|'ms-2'|'ms-3'|'ms-4'|'ms-5'|'ms-auto'

/** Padding types */
export type pddgType = 'p-0'|'p-1'|'p-2'|'p-3'|'p-4'|'p-5'|'px-0'|'px-1'|'px-2'
                    |'px-3'|'px-4'|'px-5'|'py-0'|'py-1'|'py-2'|'py-3'|'py-4'|'py-5'|'pt-0'|'pt-1'|'pt-2'|'pt-3'|'pt-4'|'pt-5'|'pe-0'|'pe-1'|'pe-2'|'pe-3'
                    |'pe-4'|'pe-5'|'pb-0'|'pb-1'|'pb-2'|'pb-3'|'pb-4'|'pb-5'|'ps-0'|'ps-1'|'ps-2'|'ps-3'|'ps-4'|'ps-5'

/** Fixed type */
export type fxedType = 'fixed-bottom' | 'fixed-top'

/** Align items type */
export type algnItemType = 'align-items-start'|'align-items-end'|'align-items-center'|'align-items-baseline'|'align-items-stretch'|'align-content-start'
                    |'align-content-end'|'align-content-center'|'align-content-between'|'align-content-around'|'align-content-stretch'

/** Align self type */
export type algnSelfType = 'align-self-auto'|'align-self-start'|'align-self-end'|'align-self-center'|'align-self-baseline'|'align-self-stretch'

/** d-flex type */
export type flexType = 'd-flex'|'d-inline-flex'|'d-none'

/** position type */
export type pstnType = 'position-static' | 'position-relative' | 'position-absolute' | 'position-fixed' | 'position-sticky'

/** moviment type */
export type mvmnType = 'top-0' | 'top-50' | 'top-100' | 'bottom-0' | 'bottom-50' | 'bottom-100' | 'start-0' | 'start-50' | 'start-100' | 'end-0' | 'end-50' | 'end-100'

/** rounded type */
export type rnddType = 'rounded'|'rounded-0'|'rounded-1'|'rounded-2'|'rounded-3'|'rounded-circle'|'rounded-pill'|'rounded-top'|'rounded-end'|'rounded-bottom'
                        |'rounded-start'

/** translate type */
export type trltType = 'translate-middle' | 'translate-middle-x' | 'translate-middle-y'

