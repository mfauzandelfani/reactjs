import { useFormik } from 'formik'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import RegionsApi from '../api/RegionsApi'
import { AddRegionRequest } from '../ReduxSaga/Action/RegionAction'

export default function FormikRegionCreate(props) {
  const dispatch = useDispatch()  
  const [previewImg, setPreviewImg] = useState()
    const [upload, setUpload] = useState(false)
    const formik = useFormik({
        initialValues:{
            name: undefined,
            file: undefined
        },
        onSubmit: async(values) =>{
            let payload = new FormData();
            payload.append('name', values.name)
            payload.append('file', values.file)
        
                dispatch(AddRegionRequest(payload))
                props.setDisplay(false)
                window.alert('Data Successfully Insert')
                props.setRefresh(true)
           
        }
    })
    const uploadConfig = name => event =>{
        let reader = new FileReader()
        const file = event.target.files[0]
        console.log(event.target.files);
        reader.onload = () => {
            formik.setFieldValue('file', file)
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file)
        setUpload(true)
    }
    const onClear = event =>{
        event.preventDefault()
        setPreviewImg(null)
        setUpload(false)
    }
  return (
    <div>
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div>
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {upload === false ? (
              <>
                <span>Kosong</span>
              </>
            ) : (
              <>
                <img src={previewImg} alt="img" />
                <span onClick={onClear}>Remove</span>
              </>
            )}
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={uploadConfig("file")}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" onClick={formik.handleSubmit}>
          Simpan
        </button>
        <button type="submit" onClick={()=>props.setDisplay(false)}>
         Cancel
        </button>
      </div>
    </div>
  );
}
