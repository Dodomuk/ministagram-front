import { INDUSTRY_TYPE_KIT } from '@/utils/sgis_kit';
import { Option, Select } from '@material-tailwind/react';

function IndustryTypeBox(props: { industryTypeSelect(industryType: number): void }) {
    function callParentFunc(industryType: string) {
        props.industryTypeSelect(INDUSTRY_TYPE_KIT[industryType] ?? 0);
    }

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="가구 타입" color="green" success>
                {Object.keys(INDUSTRY_TYPE_KIT).map((industryType) => (
                    <Option key={`industrytype_${industryType}`} onClick={() => callParentFunc(industryType)}>
                        {industryType}
                    </Option>
                ))}
            </Select>
        </div>
    );
}

export default IndustryTypeBox;
