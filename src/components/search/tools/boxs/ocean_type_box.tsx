import { OCEAN_SURFACE_TYPE_KIT } from '@/utils/sgis_kit';
import { Option, Select } from '@material-tailwind/react';

function OceanSurfaceTypeBox(props: { oceanSurfaceTypeSelect(oceanSurfaceType: number): void }) {
    function callParentFunc(oceanSurfaceType: string) {
        props.oceanSurfaceTypeSelect(OCEAN_SURFACE_TYPE_KIT[oceanSurfaceType] ?? 0);
    }

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="어가 구분" color="green" success>
                {Object.keys(OCEAN_SURFACE_TYPE_KIT).map((oceanSurfaceType) => (
                    <Option key={`oceansurfacetype${oceanSurfaceType}`} onClick={() => callParentFunc(oceanSurfaceType)}>
                        {oceanSurfaceType}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
export default OceanSurfaceTypeBox;
