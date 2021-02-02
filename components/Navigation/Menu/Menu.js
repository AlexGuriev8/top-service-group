import React from 'react'
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
const languageOptions = [
  { key: 'Apertura porte', text: 'Apertura porte', value: 'Arabic' },
  { key: 'Cambio serrature', text: 'Cambio serrature', value: 'Arabic' },
  { key: 'Sfratti Giudiziari', text: 'Sfratti Giudiziari', value: 'Arabic' },
  { key: 'Riparazioni basculante', text: 'Riparazioni basculante', value: 'Arabic' },
  { key: 'Riparazioni Tapparelle', text: 'Riparazioni Tapparelle', value: 'Arabic' },
  { key: 'Riparazioni Serrande', text: 'Riparazioni Serrande', value: 'Arabic' },
  { key: 'Riparazioni Idrauliche', text: 'Riparazioni Idrauliche', value: 'Arabic' },
  { key: 'Apertura porte mestre', text: 'Apertura porte mestre', value: 'Arabic' },

]

const DropdownExampleSearchDropdown = () => (
  <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='search'
    options={languageOptions}
    search
    text='Cerca Servizio'
  />
)

export default DropdownExampleSearchDropdown
