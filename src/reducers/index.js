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
import unApprovedAssetProcurementReducer from "./unApprovedAssetProcurementReducer";
import approvedProcurementReducer from "./approvedProcurementReducer";
import executedProcurementReducer from "./unApprovedAssetProcurementReducer";
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
import operationFinishingReducer from "./operationFinishingReducer";
import operationQualityAssuranceReducer from "./operationQualityAssuranceReducer";
import operationMaintenanceReducer from "./operationMaintenanceReducer";
import operationProcessingReducer from "./operationProcessingReducer";
import operationOperationReducer from "./operationOperationReducer";
import operationProductionMaintenanceReducer from "./operationProductionMaintenanceReducer";
import operationProductionQualityAssuranceReducer from "./operationProductionQualityAssuranceReducer";
import operationProductionFinishingReducer from "./operationProductionFinishingReducer";
import projectProjectReducer from "./projectProjectReducer";
import projectProjectResourceReducer from "./projectProjectResourceReducer";
import projectProjectBudgetingReducer from "./projectProjectBudgetingReducer";
import projectPlanningTaskReducer from "./projectPlanningTaskReducer";
import projectPlanningActivityReducer from "./projectPlanningActivityReducer";
import projectPlanningSchedulingReducer from "./projectPlanningSchedulingReducer";
import projectExecutionActivityReducer from "./projectExecutionActivityReducer";
import projectPlanningStepReducer from "./projectPlanningStepReducer";
import projectPlanningSequencingReducer from "./projectPlanningSequencingReducer";
import projectMonitoringTaskReducer from "./projectMonitoringTaskReducer";
import projectClosureReducer from "./projectClosureReducer";
import projectMonitoringActivityReducer from "./projectMonitoringActivityReducer";
import crmContactReducer from "./crmContactReducer";
import crmCustomerReducer from "./crmCustomerReducer";
import crmPartnerReducer from "./crmPartnerReducer";
import crmSupplierReducer from "./crmSupplierReducer";
import salesProductReducer from "./salesProductReducer";
import salesTeamMemberReducer from "./salesTeamMemberReducer";
import salesTeamReducer from "./salesTeamReducer";
import salesTaskReducer from "./salesTaskReducer";
import salesSalesReducer from "./salesSalesReducer";
import salesInvoiceReducer from "./salesInvoiceReducer";
import salesAccountReducer from "./salesAccountReducer";
import hrUnitReducer from "./hrUnitReducer";
import hrDepartmentReducer from "./hrDepartmentReducer";
import hrGroupReducer from "./hrGroupReducer";
import hrDivisionReducer from "./hrDivisionReducer";
import hrDesignationReducer from "./hrDesignationReducer";
import hrKpiSessionReducer from "./hrKpiSessionReducer";
import hrAppraisalSeasonReducer from "./hrAppraisalSeasonReducer";
import hrPlanningRoleReducer from "./hrPlanningRoleReducer";
import hrPlanningJobDescriptionReducer from "./hrPlanningJobDescriptionReducer";
import hrPlanningSkillsetReducer from "./hrPlanningSkillsetReducer";
import hrRecruitmentInitiationReducer from "./hrRecruitmentInitiationReducer";
import hrRecruitmentInteviewReducer from "./hrRecruitmentInteviewReducer";
import hrRecruitmentSelectionReducer from "./hrRecruitmentSelectionReducer";
import hrRecruitmentOnboardReducer from "./hrRecruitmentOnboardReducer";
import hrRecruitmentPlacementReducer from "./hrRecruitmentPlacementReducer";
import hrCompensationSalaryReducer from "./hrCompensationSalaryReducer";
import hrCompensationBonusReducer from "./hrCompensationBonusReducer";
import hrCompensationLeaveAllowanceReducer from "./hrCompensationLeaveAllowanceReducer";
import hrCompensationOvertimeReducer from "./hrCompensationOvertimeReducer";
import hrCompensationStaffLoanReducer from "./hrCompensationStaffLoanReducer";
import hrCompensationSalaryAdvanceReducer from "./hrCompensationSalaryAdvanceReducer";
import hrCompensationCertRefundReducer from "./hrCompensationCertRefundReducer";
import hrLeavesLeaveReducer from "./hrLeavesLeaveReducer";
import hrExitExitReducer from "./hrExitExitReducer";
import hrExitClearanceReducer from "./hrExitClearanceReducer";
import hrPerformanceAppraisalReducer from "./hrPerformanceAppraisalReducer";
import hrPerformancePerformanceReducer from "./hrPerformancePerformanceReducer";
import hrSelfServiceLeaveReducer from "./hrSelfServiceLeaveReducer";
import hrSelfServiceStaffLoanReducer from "./hrSelfServiceStaffLoanReducer";
import hrSelfServiceCertificateRefundReducer from "./hrSelfServiceCertificateRefundReducer";
import hrSelfServiceExitReducer from "./hrSelfServiceExitReducer";
import hrSelfServiceOvertimeReducer from "./hrSelfServiceOvertimeReducer";
import hrSelfServiceSalaryAdvanceReducer from "./hrSelfServiceSalaryAdvanceReducer";
import hrSelfServiceAppraisalReducer from "./hrSelfServiceAppraisalReducer";
import hrSelfServicePayslipReducer from "./hrSelfServicePayslipReducer";
import hrUtilityEmolumentPeriodReducer from "./hrUtilityEmolumentPeriodReducer";
import hrUtilityBonusRateReducer from "./hrUtilityBonusRateReducer";
import hrUtilityOvertimeRateReducer from "./hrUtilityOvertimeRateReducer";
import hrUtilityOrganizationLevelReducer from "./hrUtilityOrganizationLevelReducer";
import hrUtilitySalaryGradeReducer from "./hrUtilitySalaryGradeReducer";
import hrUtilitySalaryGradeDeductableReducer from "./hrUtilitySalaryGradeDeductableReducer";
import hrUtilityExtraDeductableReducer from "./hrUtilityExtraDeductableReducer";
import assetProcurementReducer from "./assetProcurementReducer";
import assetSetReducer from "./assetSetReducer";
import assetSetBatchReducer from "./assetSetBatchReducer";

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
  unApprovedAssetProcurement: unApprovedAssetProcurementReducer,
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
  operationFinishing: operationFinishingReducer,
  operationQualityAssurance: operationQualityAssuranceReducer,
  operationMaintenance: operationMaintenanceReducer,
  operationProcessing: operationProcessingReducer,
  operationOperation: operationOperationReducer,
  operationProductionMaintenance: operationProductionMaintenanceReducer,
  operationProductionQualityAssurance:
    operationProductionQualityAssuranceReducer,
  operationProductionFinishing: operationProductionFinishingReducer,
  projectProject: projectProjectReducer,
  projectProjectResource: projectProjectResourceReducer,
  projectProjectBudgeting: projectProjectBudgetingReducer,
  projectPlanningTask: projectPlanningTaskReducer,
  projectPlanningActivity: projectPlanningActivityReducer,
  projectPlanningScheduling: projectPlanningSchedulingReducer,
  projectExecutionActivity: projectExecutionActivityReducer,
  projectPlanningStep: projectPlanningStepReducer,
  projectPlanningSequencing: projectPlanningSequencingReducer,
  projectMonitoringTask: projectMonitoringTaskReducer,
  projectClosure: projectClosureReducer,
  projectMonitoringActivity: projectMonitoringActivityReducer,
  crmContact: crmContactReducer,
  crmCustomer: crmCustomerReducer,
  crmPartner: crmPartnerReducer,
  crmSupplier: crmSupplierReducer,
  salesProduct: salesProductReducer,
  salesTeamMember: salesTeamMemberReducer,
  salesTeam: salesTeamReducer,
  salesTask: salesTaskReducer,
  salesSales: salesSalesReducer,
  salesInvoice: salesInvoiceReducer,
  salesAccount: salesAccountReducer,
  hrUnit: hrUnitReducer,
  hrDepartment: hrDepartmentReducer,
  hrGroup: hrGroupReducer,
  hrDivision: hrDivisionReducer,
  hrDesignation: hrDesignationReducer,
  hrKpiSession: hrKpiSessionReducer,
  hrAppraisalSeason: hrAppraisalSeasonReducer,
  hrPlanningRole: hrPlanningRoleReducer,
  hrPlanningJobDescription: hrPlanningJobDescriptionReducer,
  hrPlanningSkillset: hrPlanningSkillsetReducer,
  hrRecruitmentInitiation: hrRecruitmentInitiationReducer,
  hrRecruitmentInteview: hrRecruitmentInteviewReducer,
  hrRecruitmentSelection: hrRecruitmentSelectionReducer,
  hrRecruitmentOnboard: hrRecruitmentOnboardReducer,
  hrRecruitmentPlacement: hrRecruitmentPlacementReducer,
  hrCompensationSalary: hrCompensationSalaryReducer,
  hrCompensationBonus: hrCompensationBonusReducer,
  hrCompensationLeaveAllowance: hrCompensationLeaveAllowanceReducer,
  hrCompensationOvertime: hrCompensationOvertimeReducer,
  hrCompensationStaffLoan: hrCompensationStaffLoanReducer,
  hrCompensationSalaryAdvance: hrCompensationSalaryAdvanceReducer,
  hrCompensationCertRefund: hrCompensationCertRefundReducer,
  hrLeavesLeave: hrLeavesLeaveReducer,
  hrExitExit: hrExitExitReducer,
  hrExitClearance: hrExitClearanceReducer,
  hrPerformanceAppraisal: hrPerformanceAppraisalReducer,
  hrPerformancePerformance: hrPerformancePerformanceReducer,
  hrSelfServiceLeave: hrSelfServiceLeaveReducer,
  hrSelfServiceStaffLoan: hrSelfServiceStaffLoanReducer,
  hrSelfServiceCertificateRefund: hrSelfServiceCertificateRefundReducer,
  hrSelfServiceExit: hrSelfServiceExitReducer,
  hrSelfServiceOvertime: hrSelfServiceOvertimeReducer,
  hrSelfServiceSalaryAdvance: hrSelfServiceSalaryAdvanceReducer,
  hrSelfServiceAppraisal: hrSelfServiceAppraisalReducer,
  hrSelfServicePayslip: hrSelfServicePayslipReducer,
  hrUtilityEmolumentPeriod: hrUtilityEmolumentPeriodReducer,
  hrUtilityBonusRate: hrUtilityBonusRateReducer,
  hrUtilityOvertimeRate: hrUtilityOvertimeRateReducer,
  hrUtilityOrganizationLevel: hrUtilityOrganizationLevelReducer,
  hrUtilitySalaryGrade: hrUtilitySalaryGradeReducer,
  hrUtilitySalaryGradeDeductable: hrUtilitySalaryGradeDeductableReducer,
  hrUtilityExtraDeductable: hrUtilityExtraDeductableReducer,
  assetProcurement: assetProcurementReducer,
  assetSet: assetSetReducer,
  assetSetBatch: assetSetBatchReducer,
});
