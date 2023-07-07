import { HOUSEHOLD_TYPE_KIT } from '@/utils/sgis_kit';
import { Option, Select } from '@material-tailwind/react';

function HouseHoldTypeBox(props: { houseHoldTypeSelect(houseHoldType: string): void }) {
    function callParentFunc(houseHoldType: string) {
        props.houseHoldTypeSelect(HOUSEHOLD_TYPE_KIT[houseHoldType] ?? '');
    }

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="성별" color="green" success>
                {Object.keys(HOUSEHOLD_TYPE_KIT).map((houseHoldType) => (
                    <Option key={`householdtype_${houseHoldType}`} onClick={() => callParentFunc(houseHoldType)}>
                        {houseHoldType}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
export default HouseHoldTypeBox;
