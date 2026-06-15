/**
 * ==========================================================================
 * UI-VERSE DRAG-AND-DROP UPLOADER SANDBOX CORE ENGINE
 * ==========================================================================
 * Production-Grade Multithreaded Queue Simulation Pipeline for NSoC'26.
 * Engineered with memory block isolation barriers, lifecycle state maps,
 * and high-performance layout mutation frame queues.
 *
 * Architecture Modules:
 * 1. Immediate Invoked Function Expression (IIFE) Namespace Shield
 * 2. Local State Management & Allocation Capacity Caching Maps
 * 3. HTML5 Native Drag-and-Drop API Event Mapping Normalizer
 * 4. Asynchronous File Stream Processing Pipelines
 * 5. Concurrent Network Simulation Progression Engine
 * 6. Dynamic Binary Byte Unit Conversion Transformers
 * 7. Storage Metrics Display & UI Synchronization Loops
 * 8. Central Code Playground Specification Drawer Controller
 * 9. Clipboard Async Stream Extraction Service Layer
 * 10. Centralized Layout Viewport Overlay Toast Dispatcher
 * ==========================================================================
 */

"use strict";

(function (window, document) {

    // ==========================================================================
    // 2. LOCAL STATE MANAGEMENT & ALLOCATION CAPACITY CACHING MAPS
    // ==========================================================================
    const Nexus_Uploader_Cache = {
        toastInstanceCounter: 0,
        maxActiveToastsAllowed: 4,
        localStorageThemeKey: "uiverse-nexus-uploader-theme",
        allocatedByteCounter: 4509715200,      // Baseline: 4.2 GB Used
        maxSystemByteCapacity: 10737418240,    // Hard Ceiling: 10 GB Allowed
        concurrentUploadThreadsMap: new Map(),
        historicalUploadedRegistry: new Set(),
        pipelineDomMetrics: {
            totalStagedCount: 0,
            totalCompletedCount: 0,
            totalTerminatedCount: 0
        }
    };

    /**
     * Core Application Pipeline Entry Point Execution Node
     */
    const bootstrapEnginePipeline = () => {
        console.log("🚀 UI-Verse Uploader Core Pipeline spinning up...");

        try {
            WorkspaceThemeManager.InitializeActiveTheme();
            DragAndDropNormalizer.RegisterDOMTargets();
            CodeInspectorDrawer.BindControlPeripherals();
            StorageMetricsSynchronizer.RefreshAllocationGraphics();
            
            executeSystemEventTrace("Engine initialization verified. Pipeline staging live.", "CoreBootstrap");
        } catch (systemInitializationFault) {
            console.error("Critical failure encountered during uiverse application orchestration bootstrap:", systemInitializationFault);
        }
    };

    /**
     * Internal framework logger system for execution cycle metrics verification
     */
    const executeSystemEventTrace = (logMessage, componentScope) => {
        const chronologicalKey = `${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
        Nexus_Uploader_Cache.historicalUploadedRegistry.add({
            id: chronologicalKey,
            scope: componentScope,
            log: logMessage,
            timestamp: new Date().toISOString()
        });
    };

    // ==========================================================================
    // 3. HTML5 NATIVE DRAG-AND-DROP API EVENT MAPPING NORMALIZER
    // ==========================================================================
    const DragAndDropNormalizer = {
        Selectors: {
            dropZoneBox: 'dropzoneContainer',
            hiddenInputElement: 'dropzoneHiddenInput'
        },

        RegisterDOMTargets: function () {
            const dropArea = document.getElementById(this.Selectors.dropZoneBox);
            const nativeInput = document.getElementById(this.Selectors.hiddenInputElement);

            if (!dropArea || !nativeInput) {
                executeSystemEventTrace("Target DOM interaction boundaries dropped. Initialization aborted.", "DragAndDropNormalizer");
                return;
            }

            // Suppress browser layout redirection parameters on file dropping behaviors
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(nativeEventName => {
                dropArea.addEventListener(nativeEventName, this.InterceptEventBubbling, false);
                document.body.addEventListener(nativeEventName, this.InterceptEventBubbling, false);
            });

            // Bind contextual visual frame shifts on active boundary crossings
            ['dragenter', 'dragover'].forEach(activeHighlightEvent => {
                dropArea.addEventListener(activeHighlightEvent, () => {
                    dropArea.classList.add('drag-over-active');
                }, false);
            });

            ['dragleave', 'drop'].forEach(extinctionEvent => {
                dropArea.addEventListener(extinctionEvent, () => {
                    dropArea.classList.remove('drag-over-active');
                }, false);
            });

            // Connect payload unpacking mechanics to drop resolution
            dropArea.addEventListener('drop', (eventInstance) => {
                const transferStream = eventInstance.dataTransfer;
                if (transferStream && transferStream.files.length > 0) {
                    FileStreamPipeline.IngestIncomingBatch(transferStream.files);
                }
            }, false);

            // Connect traditional manual window explorer fallback arrays
            dropArea.addEventListener('click', () => nativeInput.click());
            
            dropArea.addEventListener('keydown', (eventContext) => {
                if (eventContext.key === 'Enter' || eventContext.key === ' ') {
                    eventContext.preventDefault();
                    nativeInput.click();
                }
            });

            nativeInput.addEventListener('change', (eventContext) => {
                if (eventContext.target.files.length > 0) {
                    FileStreamPipeline.IngestIncomingBatch(eventContext.target.files);
                    eventContext.target.value = ''; // Flush immediately to allow repetitive choices
                }
            });
        },

        InterceptEventBubbling: function (eventContext) {
            eventContext.preventDefault();
            eventContext.stopPropagation();
        }
    };

    // ==========================================================================
    // 4. ASYNCHRONOUS FILE STREAM PROCESSING PIPELINES
    // ==========================================================================
    const FileStreamPipeline = {
        Selectors: {
            emptyStatePrompt: 'queueEmptyState',
            pipelineListNode: 'pipelineStreamList',
            statusBadgeIndicator: 'queueStatusBadge',
            fileCounterTag: 'sidebarFileCountTag'
        },

        IngestIncomingBatch: function (fileListObject) {
            const emptyPrompt = document.getElementById(this.Selectors.emptyStatePrompt);
            const streamContainer = document.getElementById(this.Selectors.pipelineListNode);
            const statusLabelMarker = document.getElementById(this.Selectors.statusBadgeIndicator);

            if (!emptyPrompt || !streamContainer) return;

            // Shift element block containers configurations visibility parameters
            emptyPrompt.style.display = 'none';
            streamContainer.style.display = 'flex';

            if (statusLabelMarker) {
                statusLabelMarker.textContent = 'Uploading...';
                statusLabelMarker.style.backgroundColor = 'var(--warning)';
                statusLabelMarker.style.color = '#ffffff';
            }

            Array.from(fileListObject).forEach(individualFile => {
                const generatedTaskId = `task_node_${Date.now()}_${Math.random().toString(36).substr(2, 7)}`;
                
                this.InjectRowItemMarkup(individualFile, generatedTaskId, streamContainer);
                ConcurrentUploadEngine.SproutSimulationThread(individualFile, generatedTaskId);
                
                Nexus_Uploader_Cache.pipelineDomMetrics.totalStagedCount++;
            });

            this.UpdateSidebarCounterAesthetic();
        },

        InjectRowItemMarkup: function (fileData, taskId, parentContainer) {
            const itemRowElement = document.createElement('li');
            itemRowElement.className = 'uv-pipeline-item';
            itemRowElement.id = taskId;

            // Map contextual typography icons depending on internal metadata strings
            const classificationResult = this.ResolveFileTypeClassification(fileData);
            const formattedSize = BinaryUnitTransformer.FormatBytesToHumanReadable(fileData.size);

            itemRowElement.innerHTML = `
                <div class="file-type-icon-box ${classificationResult.themeClass}">
                    <i class="fa-solid ${classificationResult.glyphClass}"></i>
                </div>
                <div class="file-item-workspace-core">
                    <div class="file-meta-row-top">
                        <span class="file-name-string" title="${fileData.name}">${fileData.name}</span>
                        <span class="file-size-string">${formattedSize}</span>
                    </div>
                    <div class="file-progress-track-shell">
                        <div class="file-progress-fill-node" id="fill_${taskId}"></div>
                    </div>
                    <div class="file-meta-row-bottom">
                        <span class="upload-status-label" id="label_${taskId}">
                            <i class="fa-solid fa-spinner"></i> Transmitting chunks...
                        </span>
                        <span class="upload-percentage-string" id="percent_${taskId}">0%</span>
                    </div>
                </div>
                <button class="item-action-trigger-btn" title="Cancel transaction upload" data-target-id="${taskId}">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;

            parentContainer.appendChild(itemRowElement);

            // Bind cancellation thread control signals directly onto close cross nodes
            itemRowElement.querySelector('.item-action-trigger-btn').addEventListener('click', (event) => {
                const targetId = event.currentTarget.getAttribute('data-target-id');
                ConcurrentUploadEngine.TerminateActiveTransaction(targetId);
            });
        },

        ResolveFileTypeClassification: function (fileData) {
            const lowerCaseName = fileData.name.toLowerCase();
            const lowerCaseType = fileData.type.toLowerCase();

            if (lowerCaseType.startsWith('image/')) {
                return { themeClass: 'type-image', glyphClass: 'fa-file-image' };
            } else if (lowerCaseType.startsWith('video/')) {
                return { themeClass: 'type-video', glyphClass: 'fa-file-video' };
            } else if (lowerCaseType.startsWith('audio/')) {
                return { themeClass: 'type-audio', glyphClass: 'fa-file-audio' };
            } else if (lowerCaseName.endsWith('.zip') || lowerCaseName.endsWith('.rar') || lowerCaseName.endsWith('.tar') || lowerCaseName.endsWith('.gz')) {
                return { themeClass: 'type-archive', glyphClass: 'fa-file-zipper' };
            } else if (lowerCaseName.endsWith('.pdf') || lowerCaseName.endsWith('.doc') || lowerCaseName.endsWith('.docx') || lowerCaseName.endsWith('.txt')) {
                return { themeClass: 'type-document', glyphClass: 'fa-file-pdf' };
            }
            
            return { themeClass: 'type-document', glyphClass: 'fa-file-code' };
        },

        UpdateSidebarCounterAesthetic: function () {
            const counterBadge = document.getElementById(this.Selectors.fileCounterTag);
            const streamContainer = document.getElementById(this.Selectors.pipelineListNode);
            const emptyPrompt = document.getElementById(this.Selectors.emptyStatePrompt);
            const statusLabelMarker = document.getElementById(this.Selectors.statusBadgeIndicator);

            if (!counterBadge) return;

            const remainingActiveNodesCount = streamContainer ? streamContainer.querySelectorAll('.uv-pipeline-item').length : 0;
            counterBadge.textContent = remainingActiveNodesCount;

            if (remainingActiveNodesCount === 0) {
                if (emptyPrompt) emptyPrompt.style.display = 'block';
                if (streamContainer) streamContainer.style.display = 'none';
                if (statusLabelMarker) {
                    statusLabelMarker.textContent = 'Idle';
                    statusLabelMarker.style.backgroundColor = '';
                    statusLabelMarker.style.color = '';
                }
            } else {
                const activeUnfinishedThreads = streamContainer.querySelectorAll('.uv-pipeline-item:not(.state-complete)').length;
                if (activeUnfinishedThreads === 0 && statusLabelMarker) {
                    statusLabelMarker.textContent = 'Idle';
                    statusLabelMarker.style.backgroundColor = '';
                    statusLabelMarker.style.color = '';
                }
            }
        }
    };

    // ==========================================================================
    // 5. CONCURRENT NETWORK SIMULATION PROGRESSION ENGINE
    // ==========================================================================
    const ConcurrentUploadEngine = {
        SproutSimulationThread: function (fileRef, taskId) {
            let incrementalPercentage = 0;
            
            // Generate volatile timing parameters to model packet drops and bottleneck spikes
            const totalStepsRequired = Math.floor(Math.random() * 20) + 12;
            let currentStepIndex = 0;

            const networkPulseTimer = setInterval(() => {
                currentStepIndex++;
                incrementalPercentage = Math.min(100, Math.floor((currentStepIndex / totalStepsRequired) * 100));

                // Dispatch state update demands out directly onto browser animation loops
                const frameTaskExecution = () => {
                    const progressFill = document.getElementById(`fill_${taskId}`);
                    const textPercent = document.getElementById(`percent_${taskId}`);

                    if (progressFill) progressFill.style.width = `${incrementalPercentage}%`;
                    if (textPercent) textPercent.textContent = `${incrementalPercentage}%`;
                };

                requestAnimationFrame(frameTaskExecution);

                // Check lifecycle bounds for completion triggers
                if (incrementalPercentage >= 100) {
                    clearInterval(networkPulseTimer);
                    this.ResolveSuccessfulTransmission(fileRef, taskId);
                }
            }, 220);

            Nexus_Uploader_Cache.concurrentUploadThreadsMap.set(taskId, networkPulseTimer);
        },

        ResolveSuccessfulTransmission: function (fileData, taskId) {
            Nexus_Uploader_Cache.concurrentUploadThreadsMap.delete(taskId);
            Nexus_Uploader_Cache.pipelineDomMetrics.totalCompletedCount++;

            const targetRowItem = document.getElementById(taskId);
            const rowMessageLabel = document.getElementById(`label_${taskId}`);

            if (targetRowItem) targetRowItem.classList.add('state-complete');
            if (rowMessageLabel) {
                rowMessageLabel.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--success)"></i> Complete`;
            }

            // Dynamically add data weights onto the central system allocation variables
            Nexus_Uploader_Cache.allocatedByteCounter += fileData.size;
            StorageMetricsSynchronizer.RefreshAllocationGraphics();

            injectToastAlertNotification(`File [${fileData.name}] compiled and distributed cleanly across nodes.`, 'success');
            FileStreamPipeline.UpdateSidebarCounterAesthetic();
        },

        TerminateActiveTransaction: function (taskId) {
            if (Nexus_Uploader_Cache.concurrentUploadThreadsMap.has(taskId)) {
                clearInterval(Nexus_Uploader_Cache.concurrentUploadThreadsMap.get(taskId));
                Nexus_Uploader_Cache.concurrentUploadThreadsMap.delete(taskId);
            }

            Nexus_Uploader_Cache.pipelineDomMetrics.totalTerminatedCount++;
            const targetRowItem = document.getElementById(taskId);

            if (targetRowItem) {
                const purgeAnimationTask = () => {
                    targetRowItem.style.transform = 'scale(0.92) translateX(40px)';
                    targetRowItem.style.opacity = '0';
                    targetRowItem.style.transition = 'all 0.3s var(--ease-smooth)';
                };

                requestAnimationFrame(purgeAnimationTask);

                setTimeout(() => {
                    targetRowItem.remove();
                    FileStreamPipeline.UpdateSidebarCounterAesthetic();
                }, 300);
            }

            injectToastAlertNotification("Asset transport data payload disconnected by client safety flags.", "warning");
        }
    };

    // ==========================================================================
    // 6. DYNAMIC BINARY BYTE UNIT CONVERSION TRANSFORMERS
    // ==========================================================================
    const BinaryUnitTransformer = {
        FormatBytesToHumanReadable: function (bytesInput) {
            if (bytesInput === 0) return '0 Bytes';
            
            const scaleBaseValue = 1024;
            const textLabelsArray = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            
            const logarithmicCalculatedExponent = Math.floor(Math.log(bytesInput) / Math.log(scaleBaseValue));
            const calculatedFloatingValue = parseFloat((bytesInput / Math.pow(scaleBaseValue, logarithmicCalculatedExponent)).toFixed(2));
            
            return `${calculatedFloatingValue} ${textLabelsArray[logarithmicCalculatedExponent]}`;
        }
    };

    // ==========================================================================
    // 7. STORAGE METRICS DISPLAY & UI SYNCHRONIZATION LOOPS
    // ==========================================================================
    const StorageMetricsSynchronizer = {
        Selectors: {
            graphicBarFill: 'storageWidgetFillBar',
            metaTextNode: 'storageWidgetPercentageText'
        },

        RefreshAllocationGraphics: function () {
            const barElement = document.getElementById(this.Selectors.graphicBarFill);
            const textElement = document.getElementById(this.Selectors.metaTextNode);

            if (!barElement) return;

            const operationalUsagePercentage = (Nexus_Uploader_Cache.allocatedByteCounter / Nexus_Uploader_Cache.maxSystemByteCapacity) * 100;
            
            const layoutMutationTask = () => {
                barElement.style.width = `${Math.min(100, operationalUsagePercentage)}%`;
            };
            requestAnimationFrame(layoutMutationTask);

            if (textElement) {
                const totalGigaBytesConverted = (Nexus_Uploader_Cache.allocatedByteCounter / 1073741824).toFixed(2);
                textElement.textContent = `${totalGigaBytesConverted} GB of 10 GB`;
            }

            executeSystemEventTrace(`Storage allocations recalculated: ${operationalUsagePercentage.toFixed(3)}% usage state.`, "StorageMetricsSynchronizer");
        }
    };

    // ==========================================================================
    // 8. CENTRAL CODE PLAYGROUND SPECIFICATION DRAWER CONTROLLER
    // ==========================================================================
    const CodeInspectorDrawer = {
        Selectors: {
            triggerNode: 'drawerToggleBtn',
            containerNode: 'codeDrawerContainer'
        },

        BindControlPeripherals: function () {
            const operationalButton = document.getElementById(this.Selectors.triggerNode);
            const drawerContainerBox = document.getElementById(this.Selectors.containerNode);

            if (!operationalButton || !drawerContainerBox) return;

            operationalButton.addEventListener('click', () => {
                drawerContainerBox.classList.toggle('open');
                operationalButton.classList.toggle('active');

                const isOpened = drawerContainerBox.classList.contains('open');
                operationalButton.innerHTML = isOpened ? 
                    `<i class="fa-solid fa-folder-open"></i> Hide Spec` : 
                    `<i class="fa-solid fa-code"></i> Code Spec`;
            });
        }
    };

    // ==========================================================================
    // 9. CLIPBOARD ASYNC STREAM EXTRACTION SERVICE LAYER
    // ==========================================================================
    document.addEventListener('DOMContentLoaded', () => {
        const copyTriggerButton = document.getElementById('clipCopyTrigger');
        
        if (copyTriggerButton) {
            copyTriggerButton.addEventListener('click', () => {
                const corePreCodeElement = copyTriggerButton.nextElementSibling.querySelector('code');
                if (!corePreCodeElement) return;

                // Strip double escaping strings configurations
                const normalizedCodeString = corePreCodeElement.innerText.replace(/\\n/g, '\n');

                if (!navigator.clipboard) {
                    executeLegacyClipboardFallback(normalizedCodeString, copyTriggerButton);
                    return;
                }

                navigator.clipboard.writeText(normalizedCodeString)
                    .then(() => {
                        applyCopySuccessVisualIndicators(copyTriggerButton);
                    })
                    .catch(clipboardFault => {
                        console.error("Async context clipboard stream rejected requested mutations:", clipboardFault);
                    });
            });
        }

        function executeLegacyClipboardFallback(rawCodeText, targetNativeButton) {
            const technicalTextAreaFallbackNode = document.createElement('textarea');
            technicalTextAreaFallbackNode.value = rawCodeText;
            
            // Mask indicators offscreen viewport bounds to block document shifts
            technicalTextAreaFallbackNode.style.position = 'fixed';
            technicalTextAreaFallbackNode.style.top = '-9999px';
            technicalTextAreaFallbackNode.style.left = '-9999px';
            
            document.body.appendChild(technicalTextAreaFallbackNode);
            technicalTextAreaFallbackNode.focus();
            technicalTextAreaFallbackNode.select();

            try {
                if (document.execCommand('copy')) {
                    applyCopySuccessVisualIndicators(targetNativeButton);
                }
            } catch (fallbackFault) {
                console.error("Fallback processing pipeline encountered absolute memory rejection profiles:", fallbackFault);
            }

            document.body.removeChild(technicalTextAreaFallbackNode);
        }

        function applyCopySuccessVisualIndicators(buttonNode) {
            const historicalLabel = buttonNode.textContent;
            buttonNode.textContent = 'Copied text!';
            buttonNode.style.backgroundColor = 'var(--success)';

            injectToastAlertNotification('System markup specification template cloned into active clipboard frames.', 'success');

            setTimeout(() => {
                buttonNode.textContent = historicalLabel;
                buttonNode.style.backgroundColor = '';
            }, 2000);
        }
    });

    // ==========================================================================
    // 10. CENTRALIZED LAYOUT VIEWPORT OVERLAY TOAST DISPATCHER
    // ==========================================================================
    const injectToastAlertNotification = (alertTextMessage, visualThemeProfile = 'success') => {
        const toastHubOverlayContainer = document.getElementById('globalToastOverlayHub');
        if (!toastHubOverlayContainer) return;

        // Regulate flood control metrics arrays boundary markers
        if (Nexus_Uploader_Cache.toastInstanceCounter >= Nexus_Uploader_Cache.maxActiveToastsAllowed) {
            const staleToastNode = toastHubOverlayContainer.querySelector('.toast-popup-node');
            if (staleToastNode) staleToastNode.remove();
            Nexus_Uploader_Cache.toastInstanceCounter = Math.max(0, Nexus_Uploader_Cache.toastInstanceCounter - 1);
        }

        const toastPopupNode = document.createElement('div');
        toastPopupNode.className = `toast-popup-node network-theme-${visualThemeProfile}`;
        toastPopupNode.setAttribute('role', 'status');
        toastPopupNode.setAttribute('aria-live', 'polite');

        toastPopupNode.innerHTML = `
            <i class="fa-solid fa-circle-check" aria-hidden="true" style="color:var(--primary)"></i> 
            <span class="toast-internal-string-box">${alertTextMessage}</span>
        `;

        toastHubOverlayContainer.appendChild(toastPopupNode);
        Nexus_Uploader_Cache.toastInstanceCounter++;

        const triggerEvacuationLifecycle = () => {
            const evacuationTask = () => {
                toastPopupNode.style.opacity = '0';
                toastPopupNode.style.transform = 'translateY(18px) scale(0.96)';
                toastPopupNode.style.transition = 'all 0.3s var(--ease-smooth)';
            };
            requestAnimationFrame(evacuationTask);

            toastPopupNode.addEventListener('transitionend', function completeRemovalCycleCallback() {
                toastPopupNode.removeEventListener('transitionend', completeRemovalCycleCallback);
                toastPopupNode.remove();
                Nexus_Uploader_Cache.toastInstanceCounter = Math.max(0, Nexus_Uploader_Cache.toastInstanceCounter - 1);
            });
        };

        const activeDeallocationTimerId = setTimeout(triggerEvacuationLifecycle, 3600);

        // Immediate human interaction click bypass listener override hook
        toastPopupNode.addEventListener('click', () => {
            clearTimeout(activeDeallocationTimerId);
            triggerEvacuationLifecycle();
        });
    };

    // ==========================================================================
    // PERSISTENT THEME STATE CONTEXT EXECUTOR CONTROL
    // ==========================================================================
    const WorkspaceThemeManager = {
        TriggerId: 'canvasThemeToggle',

        InitializeActiveTheme: function () {
            const toggleBtnNode = document.getElementById(this.TriggerId);
            if (!toggleBtnNode) return;

            toggleBtnNode.addEventListener('click', () => {
                const targetState = document.body.getAttribute('data-theme');
                if (targetState === 'dark') {
                    document.body.removeAttribute('data-theme');
                    toggleBtnNode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
                    injectToastAlertNotification("Interface framework restored back onto default Light Spectrum layer configuration.");
                } else {
                    document.body.setAttribute('data-theme', 'dark');
                    toggleBtnNode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
                    injectToastAlertNotification("Interface framework flipped onto High-Luminance Contrast dark profiles.");
                }
            });
        }
    };

    // Exposed interface mapping allocations for diagnostic checking routines
    window.UI_Verse_Uploader_Framework = {
        InitializeBootstrap: bootstrapEnginePipeline,
        TriggerToastAlert: injectToastAlertNotification,
        ByteConvert: BinaryUnitTransformer.FormatBytesToHumanReadable,
        ExtractTelemetry: () => Object.freeze({ ...Nexus_Uploader_Cache })
    };

    // Evaluate current document status flags before firing engine boot sequence loaders
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapEnginePipeline);
    } else {
        bootstrapEnginePipeline();
    }

})(window, document);
/* ==========================================================================
   END OF PIPELINE CORE ENGINE BUILD - UI-VERSE 2026
   ========================================================================== */