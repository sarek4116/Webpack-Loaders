    import React from 'react';


    const TodoList = (props) => {

        const TasksList = props.data.map(dataItem => {
            return (
                <div key={dataItem.id}
                onClick={() => {
                    props.remove(dataItem.id)
                }}>
                {dataItem.text}
                </div>
            )
        })
    return <div>{TasksList}</div>
    };

export default TodoList;