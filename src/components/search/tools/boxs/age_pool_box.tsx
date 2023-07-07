import { AGEPOOL_KIT } from '@/utils/sgis_kit';
import { Option, Select } from '@material-tailwind/react';

function AgePoolBox(props: { agePoolSelect(agePool: string): void }) {
    function callParentFunc(agePool: string) {
        props.agePoolSelect(String(AGEPOOL_KIT[agePool]) ?? '');
    }

    return (
        <div className="xl:w-96 pl-2">
            <Select className="hover:border-green-500" label="연령" color="green" success>
                {Object.keys(AGEPOOL_KIT).map((agePool) => (
                    <Option key={`age_pool_${agePool}`} onClick={() => callParentFunc(agePool)}>
                        {agePool}
                    </Option>
                ))}
            </Select>
        </div>
    );
}

export default AgePoolBox;
