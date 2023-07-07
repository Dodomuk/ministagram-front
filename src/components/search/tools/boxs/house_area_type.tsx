import { HOUSE_AREA_TYPE_KIT } from '@/utils/sgis_kit';
import { Option, Select } from '@material-tailwind/react';

function HouseAreaTypeBox(props: { houseAreaTypeSelect(houseAreaType: string): void }) {
    function callParentFunc(houseAreaType: string) {
        props.houseAreaTypeSelect(HOUSE_AREA_TYPE_KIT[houseAreaType] ?? '');
    }

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="주택 면적" color="green" success>
                {Object.keys(HOUSE_AREA_TYPE_KIT).map((houseAreaType) => (
                    <Option key={`houseareatype${houseAreaType}`} onClick={() => callParentFunc(houseAreaType)}>
                        {houseAreaType}
                    </Option>
                ))}
            </Select>
        </div>
    );
}

export default HouseAreaTypeBox;
