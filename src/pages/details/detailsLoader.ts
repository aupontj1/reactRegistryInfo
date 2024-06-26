import type { PackageDetails } from "../../api/types/packageDetails";
import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";

export interface DetailsLoaderResult{
    details: PackageDetails;
}

export async function detailsLoader({ params }: {params: Params}): Promise<DetailsLoaderResult>{
    const {name} = params;

    if(!name){
        throw new Error("Name must be present");
    }

    const details = await getPackage(name);

    return {
        details
    };
}