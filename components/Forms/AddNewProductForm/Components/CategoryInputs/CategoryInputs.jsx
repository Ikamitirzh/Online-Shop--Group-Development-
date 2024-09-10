import { ProductContext } from '@/contexts/ProductProvider';
import React, { useContext } from 'react';

export default function CategoryInputs({ variantName, _id, value, modelId, isValid }) {
    const { setModels } = useContext(ProductContext);
    const newId = crypto.randomUUID();

    const onChange = e => {
        setModels(prv =>
            prv.map(model => {
                if (modelId !== model._id) return model;

                return {
                    ...model,
                    categoryFields: model.categoryFields.map(field => {
                        if (field._id !== _id) return field;

                        return {
                            ...field,
                            value: e.target.value,
                            isValid: e.target.value ? true : false,
                        };
                    }),
                };
            })
        );
    };
    return (
        <div className="flex items-center gap-2">
            <label htmlFor={variantName + newId} className="text-sm">
                {variantName}:
            </label>

            <div>
                <input
                    id={variantName + newId}
                    type="text"
                    value={value}
                    onChange={onChange}
                    className={`General_Input_1 ${
                        !isValid && 'ring-red-400 focus-visible:ring-red-400'
                    }`}
                />
            </div>
        </div>
    );
}
