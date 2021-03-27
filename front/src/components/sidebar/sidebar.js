import React, {Component} from 'react';
import './sidebar.scss';

export default class Sidebar  extends Component{
    
    
 render() {
     const {typeList, listItems} = this.props;
    return(
<<<<<<< HEAD
        <aside className='sidebar'>
            <h3 className='sidebar_title'>{typeList}</h3>
            <div className="sidebar_list">
                {listItems}
            </div>
=======
        <aside>
            <h1>sample text</h1>
>>>>>>> refs/remotes/origin/main
        </aside>
    )
 }
}