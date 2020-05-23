import React, { useState, useEffect } from 'react';


const Booklist = props => {
    // bookData -> 保存用の変数, setBookData -> データ更新用の関数
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response))
    }, [props])
    return (
        <div>
            <ul>
                {
                bookData == null
                    ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) => <li key={index}> <p>{x.volumeInfo.title}</p> <img src={x.volumeInfo.imageLinks.smallThumbnail} alt=""/> <p>{x.volumeInfo.authors}</p></li>)
                }
            </ul>
        </div>
    );
}
export default Booklist