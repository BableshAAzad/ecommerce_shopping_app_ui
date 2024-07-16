import { Button, Label, TextInput } from "flowbite-react";
import { useId, useState } from "react";

function StorageType() {
    let id = useId();
    let [formData, setFormData] = useState({
        lengthInMeters: "",
        breadthInMeters: "",
        heightInMeters: "",
        capacityWeightInKg: "",
    })

    let handleFormData = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: Number(value) });
    }

    let sendProductData = async (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <h1 className="font-bold text-2xl text-center dark:text-white">Add StorageType Form</h1>
            <section className="flex items-center justify-center">

                <form className="flex max-w-md flex-col gap-4 p-4 border border-green-500 rounded-md m-2" onSubmit={sendProductData}>
                    <section className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor={`${id}slength`} value="Length In Meters" />
                            </div>
                            <TextInput id={`${id}slength`} name="lengthInMeters" value={formData.lengthInMeters} type="number" placeholder="eg. 3.5" onChange={handleFormData} required shadow />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor={`${id}sbreadth`} value="Breadth In Meters" />
                            </div>
                            <TextInput id={`${id}sbreadth`} name="breadthInMeters" value={formData.breadthInMeters} type="number" placeholder="eg. 2.2" onChange={handleFormData} required shadow />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor={`${id}sheight`} value="Height In Meters" />
                            </div>
                            <TextInput id={`${id}sheight`} name="heightInMeters" value={formData.heightInMeters} type="number" placeholder="eg. 2.7" onChange={handleFormData} required shadow />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor={`${id}sweight`} value="Capacity Weight In Kg" />
                            </div>
                            <TextInput id={`${id}sweight`} name="capacityWeightInKg" value={formData.capacityWeightInKg} type="number" placeholder="eg. 4.7" onChange={handleFormData} required shadow />
                        </div>

                    </section>

                    <div className="flex flex-wrap gap-2 items-center justify-center mb-2">
                        <Button type="submit" gradientDuoTone="purpleToBlue">
                            Add StorageType
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

export default StorageType
