import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component{
    render(){
        const {title, desc}=this.props;
        if(!title){
            return null
        }
        return(
            <div data-test='listItemcomponent'>
                <h2 data-test='listItemtitle'>{title}</h2>
                <div data-test='listItemdesc'>{desc}</div>
            </div>
        )
    }
}
ListItem.propTypes={
    title:PropTypes.string,
    desc:PropTypes.string
}
export default ListItem;