import { HOUSE_TYPE_KIT } from '@/utils/sgis_kit';
import { Option, Select } from '@material-tailwind/react';

function HouseTypeBox(props: { houseTypeSelect(houseType: string): void }) {
    function callParentFunc(houseType: string) {
        props.houseTypeSelect(HOUSE_TYPE_KIT[houseType] ?? '');
    }

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="주택 유형" color="green" success>
                {Object.keys(HOUSE_TYPE_KIT).map((houseType) => (
                    <Option key={`housetype_${houseType}`} onClick={() => callParentFunc(houseType)}>
                        {houseType}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
export default HouseTypeBox;
