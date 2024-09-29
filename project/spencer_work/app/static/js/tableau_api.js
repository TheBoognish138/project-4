document.addEventListener("DOMContentLoaded", function() {
    const vizElement = document.querySelector('#tableauViz');

    // Verify if tableau-viz element is loaded
    if (!vizElement) {
        console.error('Tableau Viz element not found');
        return;
    }

    // Check if the Tableau Viz is ready before adding listeners
    vizElement.addEventListener('firstinteractive', () => {
        console.log('Viz is interactive');

        // Attach event listeners to buttons once the Viz is interactive
        document.getElementById("pdf").addEventListener("click", () => {
            if (vizElement.showExportPDFDialog) {
                vizElement.showExportPDFDialog();
            } else {
                console.error('PDF Export is not available');
            }
        });

        document.getElementById("image").addEventListener("click", () => {
            if (vizElement.showExportImageDialog) {
                vizElement.showExportImageDialog();
            } else {
                console.error('Image Export is not available');
            }
        });

        document.getElementById("crosstab").addEventListener("click", () => {
            if (vizElement.showExportCrossTabDialog) {
                vizElement.showExportCrossTabDialog();
            } else {
                console.error('CrossTab Export is not available');
            }
        });

        document.getElementById("data").addEventListener("click", () => {
            if (vizElement.showExportDataDialog) {
                vizElement.showExportDataDialog();
            } else {
                console.error('Data Export is not available');
            }
        });

        document.getElementById("revert").addEventListener("click", () => {
            if (vizElement.revertAllAsync) {
                vizElement.revertAllAsync().then(() => {
                    console.log('Viz reverted to original state');
                }).catch(error => {
                    console.error('Revert failed:', error);
                });
            } else {
                console.error('Revert action is not available');
            }
        });
    });

    // Log a message if the Viz element is not interactive yet
    vizElement.addEventListener('initializationfailed', () => {
        console.error('Viz initialization failed');
    });
});
