import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import policyReducer from "./policyReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import vendorReducer from "./vendorReducer";
import countryReducer from "./countryReducer";
import stateReducer from "./stateReducer";
import currencyReducer from "./currencyReducer";
import cityReducer from "./cityReducer";
import locationReducer from "./locationReducer";
import serviceOutletReducer from "./serviceOutletReducer";
import hoServiceOutletReducer from "./hoServiceOutletReducer";
import schemeCodeReducer from "./schemeCodeReducer";
import glHeadReducer from "./glHeadReducer";
import subGlHeadReducer from "./subGlHeadReducer";
import transTypesReducer from "./transTypesReducer";
import officeOperationReducer from "./officeOperationReducer";
import storeTypeReducer from "./storeTypeReducer";
import assetSubclassReducer from "./assetSubclassReducer";
import assetTypeReducer from "./assetTypeReducer";
import depreciationTypeReducer from "./depreciationTypeReducer";
import assetMaintenanceTypeReducer from "./assetMaintenanceTypeReducer";
import measurementUnitReducer from "./measurementUnitReducer";
import stockReducer from "./stockReducer";
import otherAssetReducer from "./otherAssetReducer";
import unapprovedProcurementReducer from "./unapprovedProcurementReducer";
import approvedProcurementReducer from "./approvedProcurementReducer";
import executedProcurementReducer from "./executedProcurementReducer";
import unapprovedMaintenanceReducer from "./unapprovedMaintenanceReducer";
import approvedMaintenanceReducer from "./approvedMaintenanceReducer";
import executedMaintenanceReducer from "./executedMaintenanceReducer";
import stockInventoryReducer from "./stockInventoryReducer";
import unapprovedInventoryRequisitionReducer from "./unapprovedInventoryRequisitionReducer";
import unapprovedInventoryDisposalReducer from "./unapprovedInventoryDisposalReducer";
import unapprovedInventoryRetirementReducer from "./unapprovedInventoryRetirementReducer";
import unapprovedInventoryTransferReducer from "./unapprovedInventoryTransferReducer";
import assetRequisitionReducer from "./assetRequisitionReducer";
import pendingAssetRequisitionReducer from "./pendingAssetRequisitionReducer";
import withdrawnAssetRequistionReducer from "./withdrawnAssetRequistionReducer";
import abortedAssetRequisitionReducer from "./abortedAssetRequisitionReducer";
import returnAssetPostRequisitionReducer from "./returnAssetPostRequisitionReducer";
import assetRetirementReducer from "./assetRetirementReducer";
import assetPendingRetirementReducer from "./assetPendingRetirementReducer";
import assetWithdrawnRetirementReducer from "./assetWithdrawnRetirementReducer";
import assetReturnPostRetirementReducer from "./assetReturnPostRetirementReducer";
import assetDispositionReducer from "./assetDispositionReducer";
import pendingAssetDispositionReducer from "./pendingAssetDispositionReducer";
import withdrawnAssetDispositionReducer from "./withdrawnAssetDispositionReducer";
import assetReturnPostDispositionReducer from "./assetReturnPostDispositionReducer";
import assetMovementReducer from "./assetMovementReducer";
import assetTransferMovementReducer from "./assetTransferMovementReducer";
import assetPendingTransferMovementReducer from "./assetPendingTransferMovementReducer";
import assetWithdrawnTransferMovementReducer from "./assetWithdrawnTransferMovementReducer";
import assetReturnAssetPostTransferMovementReducer from "./assetReturnAssetPostTransferMovementReducer";
import assetStoreReducer from "./assetStoreReducer";
import assetStoreMaintenanceReducer from "./assetStoreMaintenanceReducer";
import assetStoreLeaseReducer from "./assetStoreLeaseReducer";
import assetStoreOwnershipReducer from "./assetStoreOwnershipReducer";
import assetStoreSpaceAllocationReducer from "./assetStoreSpaceAllocationReducer";
import assetSellStoreReducer from "./assetSellStoreReducer";
import assetStoreClosureReducer from "./assetStoreClosureReducer";
import storeMovementTypeReducer from "./storeMovementTypeReducer";
import storeDispositionTypeReducer from "./storeDispositionTypeReducer";
import storeMaintenanceTypeReducer from "./storeMaintenanceTypeReducer";
import operationsTransformationTypesReducer from "./operationsTransformationTypesReducer";
import operationsTransformationPhaseReducer from "./operationsTransformationPhaseReducer";
import operationTransformationPhaseEventReducer from "./operationTransformationPhaseEventReducer";
import operationsFinishingTypesReducer from "./operationsFinishingTypesReducer";
import operationQualityAssuranceTypeReducer from "./operationQualityAssuranceTypeReducer";
import operationsQualityAssurancePhaseReducer from "./operationsQualityAssurancePhaseReducer";
import operationsQualityAssurancePhaseEventReducer from "./operationsQualityAssurancePhaseEventReducer";
import operationMaintenanceTypeReducer from "./operationMaintenanceTypeReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  category: categoryReducer,
  city: cityReducer,
  policy: policyReducer,
  product: productReducer,
  user: userReducer,
  vendor: vendorReducer,
  country: countryReducer,
  state: stateReducer,
  currency: currencyReducer,
  location: locationReducer,
  serviceOutlet: serviceOutletReducer,
  hoServiceOutlet: hoServiceOutletReducer,
  schemeCode: schemeCodeReducer,
  glHead: glHeadReducer,
  subGlHead: subGlHeadReducer,
  transType: transTypesReducer,
  officeOperation: officeOperationReducer,
  storeType: storeTypeReducer,
  assetSubclass: assetSubclassReducer,
  assetType: assetTypeReducer,
  depreciationType: depreciationTypeReducer,
  assetMaintenanceType: assetMaintenanceTypeReducer,
  measurementUnit: measurementUnitReducer,
  stock: stockReducer,
  otherAsset: otherAssetReducer,
  unapprovedProcurement: unapprovedProcurementReducer,
  approvedProcurement: approvedProcurementReducer,
  executedProcurement: executedProcurementReducer,
  unapprovedMaintenance: unapprovedMaintenanceReducer,
  approvedMaintenance: approvedMaintenanceReducer,
  executedMaintenance: executedMaintenanceReducer,
  stockInventory: stockInventoryReducer,
  unapprovedInventoryRequisition: unapprovedInventoryRequisitionReducer,
  unapprovedInventoryDisposition: unapprovedInventoryDisposalReducer,
  unapprovedInventoryRetirement: unapprovedInventoryRetirementReducer,
  unapprovedInventoryTransfer: unapprovedInventoryTransferReducer,
  assetRequisition: assetRequisitionReducer,
  pendingAssetRequisition: pendingAssetRequisitionReducer,
  withdrawnAssetRequisition: withdrawnAssetRequistionReducer,
  abortedAssetRequisition: abortedAssetRequisitionReducer,
  returnAssetPostRequisition: returnAssetPostRequisitionReducer,
  assetRetirement: assetRetirementReducer,
  assetPendingRetirement: assetPendingRetirementReducer,
  assetWithdrawnRetirement: assetWithdrawnRetirementReducer,
  assetReturnPostRetirement: assetReturnPostRetirementReducer,
  assetDispostion: assetDispositionReducer,
  pendingAssetDisposition: pendingAssetDispositionReducer,
  withdrawnAssetDisposition: withdrawnAssetDispositionReducer,
  assetReturnPostDisposition: assetReturnPostDispositionReducer,
  assetMovement: assetMovementReducer,
  assetTransferMovement: assetTransferMovementReducer,
  assetPendingTransferMovement: assetPendingTransferMovementReducer,
  assetWithdrawnTransferMovement: assetWithdrawnTransferMovementReducer,
  assetReturnAssetPostTransferMovement:
    assetReturnAssetPostTransferMovementReducer,
  assetStore: assetStoreReducer,
  assetStoreMaintenance: assetStoreMaintenanceReducer,
  assetStoreLease: assetStoreLeaseReducer,
  assetStoreOwnership: assetStoreOwnershipReducer,
  assetStoreSpaceAllocation: assetStoreSpaceAllocationReducer,
  assetSellStore: assetSellStoreReducer,
  assetStoreClosure: assetStoreClosureReducer,
  storeMovementType: storeMovementTypeReducer,
  storeDispositionType: storeDispositionTypeReducer,
  storeMaintenanceType: storeMaintenanceTypeReducer,
  operationsTransformationType: operationsTransformationTypesReducer,
  operationsTransformationPhase: operationsTransformationPhaseReducer,
  operationTransformationPhaseEvent: operationTransformationPhaseEventReducer,
  operationsFinishingType: operationsFinishingTypesReducer,
  operationQualityAssuranceType: operationQualityAssuranceTypeReducer,
  operationsQualityAssurancePhase: operationsQualityAssurancePhaseReducer,
  operationsQualityAssurancePhaseEvent:
    operationsQualityAssurancePhaseEventReducer,
  operationMaintenanceType: operationMaintenanceTypeReducer,
});
