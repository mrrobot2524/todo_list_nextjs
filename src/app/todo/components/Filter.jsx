"use client"

import Button from "./UI/Button";

const Filter = ({value, onChange}) => {
    return (
        <div className="flex gap-5 w-full">
            <Button variant="primary" sizeBtn="sm" className={`btn ${value === 'all' ? '': 'small'} w-full lg:w-auto`} onClick={() => onChange("all")}>
                All
            </Button>
            <Button variant="succsess" sizeBtn="sm" className={`btn ${value === 'active' ? '': 'small'} w-full lg:w-auto`} onClick={() => onChange("active")}>
                Active
            </Button>
            <Button variant="danger" sizeBtn="sm" className={`btn ${value === 'completed' ? '': 'small'} w-full lg:w-auto`} onClick={() => onChange("completed")}>
                Completed
            </Button>
        </div>
    );
}
export default Filter;
