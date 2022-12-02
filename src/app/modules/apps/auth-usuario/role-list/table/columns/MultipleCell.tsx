import {FC} from 'react'
import { Permission } from '../../../permission-list/core/_models'

type Props = {
    row: Permission[]
  }

const MultipleCell: FC<Props> = ({row}) => {

    const listItems = row.map((cell) =>
        // Mal! La key debería haber sido especificada aquí:

       <a href="#" className="badge badge-light-primary fs-7 m-1" key={`permiso-${cell.id}`}>{cell.name}</a>
    );
    return (
                <>
                    {listItems}
                </>
            )
}

export {MultipleCell}




