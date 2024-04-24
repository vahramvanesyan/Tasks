import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "./Context";

export const Add = () => {
    const { products, setProducts, image, setImage, handleImageChange } = useContext(ProductContext)
    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const add = data => {
        const newProduct = {
            id: data.id,
            category: data.category,
            price: data.price,
            count: data.count,
            image: URL.createObjectURL(image)
        }
        setProducts([...products, newProduct])
        reset()
        setImage(null)
    }

    return (
        <div className="col-md-6">
            <h1 className="text-danger">Add to basket</h1>
            <form onSubmit={handleSubmit(add)}>
                {errors.id && <p className='text-danger'>{errors.id.message}</p>}
                {errors.category && <p className='text-danger'>{errors.category.message}</p>}
                {errors.price && <p className='text-danger'>{errors.price.message}</p>}
                {errors.count && <p className='text-danger'>{errors.count.message}</p>}
                <input
                    {...register("id", { required: "Please enter ID" })}
                    type="number"
                    placeholder="ID"
                    className="form-control my-3"
                />
                <input
                    {...register("category", { required: "Please enter category" })}
                    placeholder="Category"
                    className="form-control my-3"
                />
                <input
                    {...register("price", { required: "Please enter price" })}
                    type="number"
                    placeholder="Price"
                    className="form-control my-3"
                />
                <input
                    {...register("count", { required: "Please enter count" })}
                    type="number"
                    placeholder="Quantity"
                    className="form-control my-3"
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="form-control my-3"
                />
                {image && (
                    <img src={URL.createObjectURL(image)} alt="Product" style={{ width: 100, height: 100 }} />
                )}
                <button type="submit" className="btn btn-danger my-1">Add</button>
            </form>
        </div>
    )
}