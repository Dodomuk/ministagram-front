import { Option, Select } from '@material-tailwind/react';
import { GENDER_KIT } from '@/utils/sgis_kit';

function GenderBox(props: { genderSelect(gender: number): void }) {
    function callParentFunc(gender: string) {
        props.genderSelect(GENDER_KIT[gender] ?? 0);
    }

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="성별" color="green" success>
                {Object.keys(GENDER_KIT).map((gender: string) => (
                    <Option key={`gender_${gender}`} onClick={() => callParentFunc(gender)}>
                        {gender}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
export default GenderBox;
