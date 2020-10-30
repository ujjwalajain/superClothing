import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SelectSections } from '../../redux/directory/directory.selector';
import MenuItem from '../menuItem/menuItem.component';

import './directory.style.scss';

export const Directory = ({ sections }) => (
  <div className="directorymenu">
    {
      sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={ id } { ...sectionProps } />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: SelectSections
})
export default connect(mapStateToProps)(Directory);