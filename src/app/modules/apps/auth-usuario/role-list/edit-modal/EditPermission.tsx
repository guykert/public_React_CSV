import { FC } from 'react'
import { useQuery } from 'react-query'
import { isNotEmpty, QUERIES } from '../../../../../../_metronic/helpers'
import { Permission } from '../../permission-list/core/_models'
import { getUsers } from '../../users-list/core/_requests'
import { useListView } from '../core/ListViewProvider'
import { DetailPermission } from './DetailPermission'
import { SelectionAllCheckbox } from './SelectionAllCheckbox'


type Props = {
    permissions?: Permission[]
  }

export const EditPermission: FC<Props> = (permissions) => {

    // Primero listaré los permisos exitentes
    const {itemIdForUpdate, setItemIdForUpdate} = useListView()
    const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
    const {
        data,
      } = useQuery(
        `${QUERIES.ROLES_LIST}-permission-${itemIdForUpdate}`,
        () => {
          return getUsers('');
        },
        {
          cacheTime: 0,
          enabled: enabledQuery,
          onError: (err) => {
            setItemIdForUpdate(undefined)
            console.error(err)
          },
        }
      )


        console.log(permissions);


        const countries = data?.data?.map((link) => {

            const PermisoAsignado = permissions.permissions?.find(obj => {
                return obj.id === link.id;
            });

        
            if (PermisoAsignado) {
                return <DetailPermission permission={link} key={`table-id-per-${link.id}`} permissionAsigned={PermisoAsignado} />;
            }else{
                return <DetailPermission permission={link} key={`table-id-per-${link.id}`} permissionAsigned={{id: undefined}} />;
            }

           
        })



  return (
    <>

        <div className="mh-300px scroll-y me-n7 pe-7">
            
            <label className="fs-5 fw-bold form-label mb-2">Role Permissions</label>
            

            
            <div className="table-responsive">
                
                <table className="table align-middle table-row-dashed fs-6 gy-5">
                    
                    <tbody className="text-gray-600 fw-semibold">
                        
                        <tr>
                            <td className="text-gray-800">Administrator Access
                            <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allows a full access to the system"></i></td>
                            <td>
                                
                                <label className="form-check form-check-sm form-check-custom form-check-solid me-9">
                                    <SelectionAllCheckbox permissions={permissions.permissions} />
                                    <span className="form-check-label">Select all</span>
                                </label>
                                
                            </td>
                        </tr>
                        
                        {
                            countries
                        }

                        
                    </tbody>
                    
                </table>
                
            </div>
            
        </div>
															
    
    </>
  )
}
