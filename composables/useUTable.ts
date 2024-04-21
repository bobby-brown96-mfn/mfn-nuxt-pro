//import type { Tab } from "#ui/types";
import type { IColumnDef, IUTableColumn } from "~/types";

const useUTable = () => {
  const loading: Ref<boolean> = ref(false);
  const allColumnDefs: Ref<IColumnDef[]> = ref([]);

  //   const convertColumn = (def:IColumnDef):IUTableColumn=>{
  //     const {label,key,...c}=def

  //     return {
  //         key,
  //         label
  //     }
  //   }

  return { loading, allColumnDefs };
};

export default useUTable;
