import React, { useState } from 'react'
import Select from 'react-select';

const employ = [
    { value: 'festanstellung', label: 'Festanstellung' },
    { value: 'fulltime', label: 'Full time' },
    { value: 'minijob', label: 'Mini-job' },
    { value: 'nightshift', label: 'Night shifts' },
    { value: 'ptflexible', label: 'Part time - flexible' },
    { value: 'ptshift', label: 'Part time - shift' },
    { value: 'ptafternoon', label: 'Part time in the afternoon' },
    { value: 'ptevening', label: 'Part time in the evening' },
    { value: 'ptmonring', label: 'Part time in the morning' },
    { value: 'praktikum', label: 'Praktikum' },
    { value: 'shift', label: 'Shift' },
    { value: 'weekendshift', label: 'Shift / Night shifts / Weekends' },
    { value: 'teilzeit', label: 'Teilzeit' },
    { value: 'temporär', label: 'Temporär' },
    { value: 'temporör', label: 'Temporör' },
    { value: 'unbefristet', label: 'Unbefristet' },
    { value: 'vollzeit', label: 'Vollzeit, Teilzeit möglich' },
    { value: 'weekend', label: 'Weekend' },
    { value: 'wfh', label: 'Work from home/telework' },
];
const department = [
    { value: 'dienstleistung', label: 'Dienstleistung' },
    { value: 'elektriker', label: 'Elektriker/in' },
    { value: 'kaufmannisch', label: 'Kaufmännisch' },
    { value: 'maler', label: 'Maler/in' },
];

const Filter = () => {
    const [empOption, setEmpOption] = useState(null);
    const [depOption, setDepOption] = useState(null);
    const [query, setQuery] = useState([]);

    console.log(query)

    return (
        <div className="contact-form pl80 wow slideInUp">
            <div className="title">
                <h2>Jobsuche</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                </p>
            </div>

            <div className="form-group">
                <input type="text" name="job" onChange={(e) => setQuery(e.target.value)} id="" className="form-control" placeholder="Welchen Job suchen Sie?" />
            </div>

            <div className="form-group">
                <input type="text" name="" id="" className="form-control" placeholder="PLZ oder Ort" />
            </div>

            <div className='form-group'>
                <Select
                    defaultValue={empOption}
                    onChange={setEmpOption}
                    options={employ}
                    isMulti
                    placeholder="Unternehmensbereich/Abteilung"
                />
            </div>

            <div className='form-group'>
                <Select
                    defaultValue={depOption}
                    onChange={setDepOption}
                    options={department}
                    isMulti
                    placeholder="Art der Anstellung"
                />
            </div>

            <p className="all-fld">Alle Filter entfernen</p>

            <div className="form-group text-end">
                <button className="cutsom-btn wow slideInUp">Filtern</button>
            </div>
        </div>
    )
}

export default Filter