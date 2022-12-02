import React, {FC, useState} from 'react'
import { Permission, initialModel } from '../../permission-list/core/_models'

type Props = {
    permission: Permission,
    permissionAsigned: Permission
  }

export const DetailPermission: FC<Props>  = ({permission, permissionAsigned}) => {
    // console.log('permission : ');
    // console.log(permission);

    const [userForEdit] = useState<Permission>({
        ...permissionAsigned,
        read: permissionAsigned.read || initialModel.read,
        write: permissionAsigned.write || initialModel.write,
        create: permissionAsigned.create || initialModel.create,
      })

        const onSelectRead = (e: React.ChangeEvent<HTMLInputElement>) => {
            
            console.log("onSelectRead : " + e.target.value);

            console.log(e.target.value);
        }

        const onSelectWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("onSelectWrite : " + e.target.value);
        }

        const onSelectCreate = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("onSelectCreate : " + e.target.value);
        }

  return (
        <tr key={`table-id-permission-${permission.id}`}>

            <td className="text-gray-800">{permission.name}</td>


            <td>
                
                <div className="d-flex">
                    
                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                        <input className="form-check-input" type="checkbox" value="" checked={userForEdit.read} name="user_management_read" onChange={onSelectRead} />
                        <span className="form-check-label">Read</span>
                    </label>
                    
                    
                    <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                        <input className="form-check-input" type="checkbox" value="" checked={userForEdit.write} name="user_management_write" onChange={onSelectWrite} />
                        <span className="form-check-label">Write</span>
                    </label>
                    
                    
                    <label className="form-check form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="" checked={userForEdit.create} name="user_management_create" onChange={onSelectCreate} />
                        <span className="form-check-label">Create</span>
                    </label>
                    
                </div>
                
            </td>

        </tr>
  )
}
