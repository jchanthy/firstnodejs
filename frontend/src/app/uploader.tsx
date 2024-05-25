import { Input } from "@/components/ui/input"
import React, { useState } from 'react';
import { XMLParser } from 'fast-xml-parser';

const Uploader = () => {
    const [dragging, setDragging] = useState(false);
    const [questions, setQuestions] = useState([]);

    const handleDragOver = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDrop = (e: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { files: any[]; }; }) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleFileInput = (e: { target: { files: any[]; }; }) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = (file: Blob) => {
        if (!file) return;
        if (file.type !== 'text/xml') {
            alert('Please upload an XML file.');
            return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log(event);
            // const xmlString = event.target.result;
            // parseXml(xmlString);
        };
        reader.readAsText(file);
    };

    const parseXml = (xmlString: string | ArrayBuffer | null) => {
        // const parser = new XMLParser();
        // const result = parser.parse(xmlString);

        // console.log(result);
        // Extracting relevant data from parsed XML
        // const extractedQuestions = result.quiz.question.map((q: { name: { text: any; }; questiontext: { text: any; }; tags: { tag: any; }; }) => ({
        //     name: q.name?.text || '',
        //     questiontext: q.questiontext?.text || '',
        //     tags: q.tags?.tag || []
        // }));

        // setQuestions(extractedQuestions);
        // onFileUpload(extractedQuestions);
    };

    return (
        <>
            <div
                className={`file-uploader ${dragging ? 'dragging' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            // onDrop={handleDrop}
            >
                <Input
                    type="file"
                    accept=".xml"
                    // onChange={handleFileInput}
                    style={{ display: 'none' }}
                    id="file-input"
                />
                <label htmlFor="file-input">
                    {dragging ? 'Drop the file here' : 'Drag and drop or click to upload XML file'}
                </label>
            </div>
            <div className="result">
                {questions.map((question: { name: string, index: number }) => (
                    <div key={question.index}>
                        <h3>{question.name}</h3>
                        <div dangerouslySetInnerHTML={{ __html: question }} />
                        <ul>
                            {/* {question.tags.map((tag: string, id: number) => (
                                <li key={id}>{tag || tag}</li>
                            ))} */}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Uploader;