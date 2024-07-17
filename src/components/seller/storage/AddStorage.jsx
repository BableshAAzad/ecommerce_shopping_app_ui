import { useId, useState } from "react";
import { materialTypesList } from "../MaterialTypes"
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Storage() {
    let id = useId();
    let [formData, setFormData] = useState({
        blockName: "",
        section: "",
        materialTypes: []
    })
    let [noOfStorageUnits, setNoOfStorageUnits] = useState({ no_of_storage_units: "" });

    let handleFormData = ({ target: { name, value, checked } }) => {
        if (name === "materialTypes") {
            if (checked) {
                setFormData(prevState => ({
                    ...prevState,
                    materialTypes: [...prevState.materialTypes, value]
                }));
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    materialTypes: prevState.materialTypes.filter(type => type !== value)
                }));
            }
        } else if (name === 'no_of_storage_units') {
            setNoOfStorageUnits({ ...noOfStorageUnits, [name]: Number(value) })
        }
        else {
            setFormData({ ...formData, [name]: value });
        }
    }

    let sendProductData = async (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(noOfStorageUnits);
    }

    return (
        <>
            <h1 className="font-bold text-2xl text-center dark:text-white">Add Storage Form</h1>
            <section className="flex items-center justify-center">

                <form className="flex max-w-md flex-col gap-4 p-4 border border-green-500 rounded-md m-2" onSubmit={sendProductData}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor={`${id}stblockName`} value="Block Name" />
                        </div>
                        <TextInput id={`${id}stblockName`} name="blockName" value={formData.blockName} type="text" placeholder="eg. C-Block" onChange={handleFormData} required shadow />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor={`${id}stsection`} value="Section" />
                        </div>
                        <TextInput id={`${id}stsection`} name="section" value={formData.section} type="text" placeholder="eg. 404-B" onChange={handleFormData} required shadow />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor={`${id}stunits`} value="Number Of Storage Units" />
                        </div>
                        <TextInput id={`${id}stunits`} name="no_of_storage_units" value={noOfStorageUnits.no_of_storage_units} type="number" placeholder="eg. 2" onChange={handleFormData} required shadow />
                    </div>

                    <div className="mb-2 block">
                        <h3 className="text-purple-700 dark:text-purple-500">Material Types</h3>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {materialTypesList.map((type, index) => {
                                return <div key={index}>
                                    < Checkbox
                                        id={`${id}${type}`}
                                        name="materialTypes"
                                        value={type}
                                        onChange={handleFormData}
                                        label={type}
                                        className="mr-2"
                                    />
                                    <Label htmlFor={`${id}${type}`}>{type}</Label>
                                </div>
                            })}
                        </div>
                    </div>


                    <div className="flex flex-wrap gap-2 items-center justify-center mb-2">
                        <Button type="submit" gradientDuoTone="purpleToBlue">
                            Add Storage
                        </Button>
                        <Button type="reset" gradientMonochrome="failure">
                            Clear
                        </Button>
                    </div>
                </form>
            </section >
        </>
    )
}

export default Storage
