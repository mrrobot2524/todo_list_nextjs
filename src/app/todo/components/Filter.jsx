"use client"

import Button from "./UI/Button";

const Filter = ({value, onChange}) => {
    return (
        <div className="flex gap-5">
            <Button variant="primary" sizeBtn="sm" className={`btn ${value === 'all' ? '': 'small'}`} onClick={() => onChange("all")}>
                All
            </Button>
            <Button variant="primary" sizeBtn="sm" className={`btn ${value === 'active' ? '': 'small'}`} onClick={() => onChange("active")}>
                Active
            </Button>
            <Button variant="primary" sizeBtn="sm" className={`btn ${value === 'completed' ? '': 'small'}`} onClick={() => onChange("completed")}>
                Completed
            </Button>
        </div>
    );
}
export default Filter;
