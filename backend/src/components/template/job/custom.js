import React, { useState, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Custom = () => {
    const [editorData, setEditorData] = useState('');
    const editorRef = useRef(null);

    const clearEditorData = () => {
        const editorInstance = editorRef.current.editor;
        editorInstance.setData('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // clear editor data
        clearEditorData();
        // handle form submission
        // ...
    }

    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }}
                ref={editorRef}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Custom