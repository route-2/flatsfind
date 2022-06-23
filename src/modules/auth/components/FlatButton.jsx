import { useState } from "react"
import apiAuth from "../apis/auth.api"
import useAuth from "../context/auth.context"
import { CheckPhoneModal } from "./CheckPhoneModal"
import { LoginModal } from "./LoginModal"
import { SignupModal } from "./SignupModal"
import { AddFlatModal } from "./AddFlatModal"

const FlatButton = () => {
  const [addFlatModal, setAddFlatModal] = useState(false)

  const {
    phone,
    fullName,
    email,
    fname,
    deposit,
    rent,
    area,fstate,
    city,
    locality,
    furnished,
    tenants,
    available,
    type
  } = useAuth()

  const flatButtonHandler = () => {
    setAddFlatModal(true)
  }

  const addflatHandler = async () => {
    const addflatResponse = await apiAuth.addflat({
      name : `${fname}`,
      rent : rent,
      deposit : deposit,
      area : area,
      state : `${fstate}`,
      city : `${city}`,
      furnishStatus : `${furnished}`,
      preferredTenants : `${tenants}`,
      locality : `${locality}`,
      available : available,
      apartmentType : `${type}`,
      ownerPhone :`+91${phone}`,
      owneremail : `${email}`
    })

    console.log(addflatResponse);
  }


  return (
    <>
      <AddFlatModal
        showModal={addFlatModal}
        setShowModal={setAddFlatModal}
        clickHandler={addflatHandler}
      />
     
     <button
        className="btn btn-outline text-white rounded-xl bg-blue-600 p-2"
        onClick={() => flatButtonHandler()}
      >
        
        Login/Signup
      </button>
    </>
  )
}

export default FlatButton