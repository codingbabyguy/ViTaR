<div align="center">

# ViTaR: Visuo-Tactile Residual Adaptation for Foundation VLA Manipulation

[🌐 **Project Page**](https://icr-lab.github.io/ViTaR/) &nbsp;&nbsp;|&nbsp;&nbsp; [📄 **arXiv**](https://arxiv.org/abs/XXXX.XXXXX) &nbsp;&nbsp;|&nbsp;&nbsp; [🎥 **Video**](https://www.youtube.com/watch?v=VIDEO_ID)

<br />

<a href="https://icr-lab.github.io/ViTaR/assets/images/teaser.pdf">
  <img src="https://icr-lab.github.io/ViTaR/assets/images/teaser.png" alt="ViTaR teaser: tactile residual adaptation over a frozen Vision-Language-Action policy" width="100%" />
</a>

<sub>Click the teaser to open the <a href="https://icr-lab.github.io/ViTaR/assets/images/teaser.pdf">high-resolution PDF</a>.</sub>

</div>

## Abstract

As Vision-Language-Action (VLA) models scale toward real-world deployment, contact-rich manipulation exposes a critical blind spot: these policies encode broad visual-semantic priors yet remain unaware of local contact events, producing identical actions whether contact is established, lost, or destabilized. Existing remedies either modify VLA internals, risking catastrophic forgetting, or demand online reinforcement under near-failure contact conditions. Both grant tactile unbounded influence over action generation, conflicting with the priors that make VLAs generalizable. We introduce **ViTaR**, which reframes tactile feedback from an action-generating perceptual input to an execution modulator that selects and scales bounded residual corrections atop a frozen VLA, preserving pretrained capabilities by construction. ViTaR decomposes adaptation into two stages: **Effect-Guided Modeling** determines *whether* and *which* correction is locally justified via outcome-grounded preference evidence, and **Residual Action Modulation** converts this evidence into a residual choice with continuously scaled gain from real-time visuotactile observations. On the UniVTAC benchmark spanning seven contact-rich tasks, ViTaR achieves **61.3%** average success, a **30.6 percentage-point** improvement over its frozen VLA base that also surpasses purpose-built tactile baselines. Physical-robot experiments confirm that bounded tactile modulation transfers to real sensor noise and dynamics.
