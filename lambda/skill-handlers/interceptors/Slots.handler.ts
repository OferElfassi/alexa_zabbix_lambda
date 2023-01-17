

export function GetSlotValues(filledSlots?: Slots): SlotValues {
    const slotValues: SlotValues = {};

    if (!filledSlots) {
        return slotValues;
    }

    for (const item of Object.values(filledSlots)) {
        const { name, value, resolutions, confirmationStatus } = item;

        if (!resolutions) {
            slotValues[name] = {name, value, isMatch: false, confirmationStatus};
            continue;
        }

        const {status} = resolutions.resolutionsPerAuthority[0];
        if (!status) {
            slotValues[name] = {name, value, isMatch: false, confirmationStatus};
            continue;
        }

        switch (status.code) {
            case "ER_SUCCESS_MATCH":
                const valueWrappers = resolutions.resolutionsPerAuthority[0].values;

                if (valueWrappers.length > 1) {
                    slotValues[name] = {
                        name, value, confirmationStatus,
                        isMatch: true, isAmbiguous: true,
                        resolved: valueWrappers[0].value.name,
                        id: valueWrappers[0].value.id,
                        values: valueWrappers.map((valueWrapper) => valueWrapper.value),
                    };
                    break;
                }

                slotValues[name] = {
                    name, value, confirmationStatus,
                    isMatch: true, isAmbiguous: false,
                    resolved: valueWrappers[0].value.name,
                    id: valueWrappers[0].value.id,
                    values: [],
                };
                break;
            case "ER_SUCCESS_NO_MATCH":
                slotValues[name] = {name, value, isMatch: false, confirmationStatus};
                break;
            default:
                break;
        }
    }

    return slotValues;
}

// export function GetSlotValues(filledSlots?: Slots): SlotValues {
//     const slotValues: SlotValues = {};
//
//     if (filledSlots) {
//         Object.keys(filledSlots).forEach((item) => {
//             const name = filledSlots[item].name;
//             const value = filledSlots[item].value;
//             const confirmationStatus = filledSlots[item].confirmationStatus;
//
//             if (filledSlots[item] &&
//                 filledSlots[item].resolutions &&
//                 filledSlots[item].resolutions!.resolutionsPerAuthority &&
//                 filledSlots[item].resolutions!.resolutionsPerAuthority![0] &&
//                 filledSlots[item].resolutions!.resolutionsPerAuthority![0].status &&
//                 filledSlots[item].resolutions!.resolutionsPerAuthority![0].status.code) {
//                 switch (filledSlots[item].resolutions!.resolutionsPerAuthority![0].status.code) {
//                     case "ER_SUCCESS_MATCH":
//                         const valueWrappers = filledSlots[item].resolutions!.resolutionsPerAuthority![0].values;
//
//                         if (valueWrappers.length > 1) {
//                             slotValues[name] = {
//                                 name, value, confirmationStatus,
//                                 isMatch: true, isAmbiguous: true,
//                                 resolved: valueWrappers[0].value.name,
//                                 id: valueWrappers[0].value.id,
//                                 values: valueWrappers.map((valueWrapper) => valueWrapper.value),
//                             };
//                             break;
//                         }
//
//                         slotValues[name] = {
//                             name, value, confirmationStatus,
//                             isMatch: true, isAmbiguous: false,
//                             resolved: valueWrappers[0].value.name,
//                             id: valueWrappers[0].value.id,
//                             values: [],
//                         };
//                         break;
//                     case "ER_SUCCESS_NO_MATCH":
//                         slotValues[name] = {
//                             name, value, isMatch: false,
//                             confirmationStatus: confirmationStatus,
//                         };
//                         break;
//                     default:
//                         break;
//                 }
//             } else {
//                 slotValues[name] = {
//                     name, value, isMatch: false,
//                     confirmationStatus: confirmationStatus,
//                 };
//             }
//         });
//     }
//
//     return slotValues;
// }
