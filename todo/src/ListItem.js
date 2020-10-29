import React from 'react';
import '../src/ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ListItems(props) {
    const items = props.items;
    const ListItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type='text' id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }}></input>
                <span>
                    <FontAwesomeIcon className="faicons"
                        icon='trash'
                        onClick={() => props.deleteItem(item.key)}
                    />
                </span>
            </p>

        </div>
    })


    return (
        <div>{ListItems}</div>
    )
}

export default ListItems;